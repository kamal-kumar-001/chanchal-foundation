import connectDB from '../../../../middleware/mongoose';
import Member from '../../../../Models/Member';

// Get all members
export async function GET(req) {
  await connectDB();
  try {
    const members = await Member.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify({members, success: true}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching members' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Create a new member
export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newMember = new Member(data);
    await newMember.save();
    return new Response(JSON.stringify(newMember), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating member' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Update a member
export async function PUT(req) {
  await connectDB();
  try {
    const data = await req.json();
    const { id, ...updateData } = data;
    const updatedMember = await Member.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updatedMember), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating member' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Delete a member
export async function DELETE(req) {
  await connectDB();
  try {
    const { id } = await req.json();
    await Member.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Member deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting member' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
