import connectDB from '../../../../../middleware/mongoose';
import Member from '../../../../../Models/Member';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    // Find the member by email
    const {email,password }= data;
    const member = await Member.findOne({ email });
    if (!member) {
        return new Response(JSON.stringify({ message: 'Invalid email Id' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    // Check if the password is correct
    const isMatch = await member.comparePassword(password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid password' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: member._id,name: member.name, email: member.email, isAdmin: member.isAdmin },
      "your_jwt_secret_key",
    //   process.env.JWT_SECRET,
      // { expiresIn: '24h' }
    );

    return new Response(JSON.stringify({ token, isAdmin: member.isAdmin }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error logging in' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
