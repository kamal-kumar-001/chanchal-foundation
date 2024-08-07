import crypto from 'crypto';
import { connectDB } from '../../../../../middleware/mongoose';

export async function POST(req) {
  await connectDB();

  try {
    const { txnid, amount, productinfo, firstname, email } = await req.json();

    const key = process.env.PAYU_KEY || "f29e0a";
    const salt = process.env.PAYU_SALT || "a9hodaS5djj9hHqEA8bMTH5lzA6u8D91";
    
    // Create the string for hash
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;

    // Generate the hash using SHA-512
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    return new Response(JSON.stringify({ hash, success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error generating hash', error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
