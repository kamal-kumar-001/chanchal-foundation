 import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    // console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect("mongodb://kamal:%40mongod8@ac-bhaee3p-shard-00-00.qhpam01.mongodb.net:27017,ac-bhaee3p-shard-00-01.qhpam01.mongodb.net:27017,ac-bhaee3p-shard-00-02.qhpam01.mongodb.net:27017/Chanchal?replicaSet=atlas-q931k6-shard-0&ssl=true&authSource=admin", {
    // await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    // console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}