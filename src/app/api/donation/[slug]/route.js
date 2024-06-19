import connectDB from '../../../../../middleware/mongoose';
import Donator from '../../../../../Models/Donator';

export async function GET(req,{params}) {
  await connectDB();
  const id = params.slug;
  try {
    const donation = await Donator.findById(id);
    return new Response(JSON.stringify({donation, success: true}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching donators' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json'
      }
    });
  }
}