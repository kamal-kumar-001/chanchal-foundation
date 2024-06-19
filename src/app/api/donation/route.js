import connectDB from '../../../../middleware/mongoose';
import Donator from '../../../../Models/Donator';

export async function GET(req) {
  await connectDB();

  const url = new URL(req.url);
  const email = url.searchParams.get('email');
  const phone = url.searchParams.get('phone');

  try {
    let donations;
    if (email) {
      donations = await Donator.find({ email }).sort({ createdAt: -1 });
    } else if (phone) {
      donations = await Donator.find({ phone }).sort({ createdAt: -1 });
    } else {
      return new Response(JSON.stringify({ message: 'No query parameters provided' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({ donations, success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching donations' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
