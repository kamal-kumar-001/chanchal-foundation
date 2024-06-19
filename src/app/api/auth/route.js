import jwt from 'jsonwebtoken';
import connectDB from '../../../../middleware/mongoose';
import Member from '../../../../Models/Member';

export async function POST(req, res) {
    await connectDB();
// console.log(req.headers);
    const authorization = req.headers.get('authorization');
    // console.log(authorization);

    if (!authorization) {
        return new Response(JSON.stringify({ isAuthenticated: false, message: 'No token provided' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        // return res.status(401).json({ isAuthenticated: false, message: 'No token provided' });
    }

    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, "your_jwt_secret_key");

        // Check if the user exists in the database
        const member = await Member.findById(decoded.id);
        if (!member) {
            return new Response(JSON.stringify({ isAuthenticated: false, message: 'Invalid token' }), {
                status: 401,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            // return res.status(401).json({ isAuthenticated: false, message: 'Invalid token' });
        }
      const isAdmin = decoded.isAdmin;
        return new Response(JSON.stringify({ isAuthenticated: true, user: decoded, isAdmin }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        // return res.status(200).json({ isAuthenticated: true, user: decoded });
    } catch (error) {
        return new Response(JSON.stringify({ isAuthenticated: false, message: 'Invalid token' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        // return res.status(401).json({ isAuthenticated: false, message: 'Invalid token' });
    }
}
