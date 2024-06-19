import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://kamal:%40mongod8@ac-bhaee3p-shard-00-00.qhpam01.mongodb.net:27017,ac-bhaee3p-shard-00-01.qhpam01.mongodb.net:27017,ac-bhaee3p-shard-00-02.qhpam01.mongodb.net:27017/Chanchal?replicaSet=atlas-q931k6-shard-0&ssl=true&authSource=admin");
    // await mongoose.connect("mongodb://localhost:27017/Chanchal");
    // console.log("Database is connected...");
  } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
      }
    };
    
    module.exports = connectDB;
    