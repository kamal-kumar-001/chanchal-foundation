import connectDB from '../../../../middleware/mongoose';
import Donator from '../../../../Models/Donator';

// Get all donators
export async function GET(req) {
  await connectDB();
  try {
    const donators = await Donator.find({}).sort({ amount: -1 });
    return new Response(JSON.stringify({donators, success: true}), {
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

// Create a new donator
export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newDonator = new Donator(data);
    await newDonator.save();
    return new Response(JSON.stringify(newDonator), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating donator' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Update a donator
export async function PUT(req) {
  await connectDB();
  try {
    const data = await req.json();
    const { id, ...updateData } = data;
    const updatedDonator = await Donator.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updatedDonator), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating donator' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Delete a donator
export async function DELETE(req) {
  await connectDB();
  try {
    const { id } = await req.json();
    await Donator.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Donator deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting donator' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
