import connectDB from '../../../../middleware/mongoose';
import Contact from '../../../../Models/Contact';

// Get all contacts
export async function GET(req) {
  await connectDB();
  try {
    const contacts = await Contact.find({});
    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching contacts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Create a new contact
export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newContact = new Contact(data);
    await newContact.save();
    return new Response(JSON.stringify(newContact), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating contact' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Update a contact
export async function PUT(req) {
  await connectDB();
  try {
    const data = await req.json();
    const { id, ...updateData } = data;
    const updatedContact = await Contact.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updatedContact), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating contact' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Delete a contact
export async function DELETE(req) {
  await connectDB();
  try {
    const { id } = await req.json();
    await Contact.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Contact deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting contact' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
