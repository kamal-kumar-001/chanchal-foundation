import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Chanchal");
    // console.log("Database is connected...");
  } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
      }
    };
    
    module.exports = connectDB;
    
//     import mongoose from 'mongoose';
    
//     const connectDB = handler => async (req, res) => {
//         if (mongoose.connections[0].readyState) {
//             // Use current db connection
//                 console.log("Database is connected...");
//                 return handler(req, res);
//             }
//             // Use new db connection
//             await mongoose.connect("mongodb://localhost:27017/Chanchal", {
//                 useUnifiedTopology: true,
//                 useNewUrlParser: true,
//             });
//             console.log("Database is connected...");
//   return handler(req, res);
// };

// export default connectDB;
