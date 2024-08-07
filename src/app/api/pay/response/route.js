import crypto from 'crypto';
import { connectDB } from '../../../../../middleware/mongoose';
import Donator from '../../../../../Models/Donator';

export async function GET(req) {
  await connectDB();

  const url = new URL(req.url);
  // console.log(url);
  const params = Object.fromEntries(url.searchParams.entries());

  const {
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    status,
    hash,
    key,
    ...additionalData
  } = params;

  const salt = process.env.PAYU_SALT || "a9hodaS5djj9hHqEA8bMTH5lzA6u8D91";

  // Create the reverse hash string
  const reverseHashString = `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;

  // Generate the hash using SHA-512
  const calculatedHash = crypto.createHash('sha512').update(reverseHashString).digest('hex');

  if (calculatedHash !== hash) {
    const redirectUrl =  `/payment/failure`;

    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });
  }
  // if (calculatedHash !== hash) {
  //   return new Response(JSON.stringify({ success: false, message: 'Hash verification failed' }), {
  //     status: 400,
  //     headers: {
  //       'Location': `/payment/failure`
  //     }
  //   });
  // }

  // Hash verification successful
  // Update your database based on the status of the transaction
  let paymentStatus = status === "success";

  // Update the Donator's payment status
  await Donator.findOneAndUpdate({ txnid }, { paymentStatus }, { new: true });

  // Redirect to success or failure page based on payment status
  const redirectUrl = paymentStatus ? `/payment/success?id=${txnid}` : `/payment/failure?id=${txnid}`;

  return new Response(null, {
    status: 302,
    headers: {
      'Location': redirectUrl
    }
  });
}
