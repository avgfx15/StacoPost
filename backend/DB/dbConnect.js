import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect MongoDB at default port 27017.
const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connection Succeeded.');
  } catch (error) {
    console.log('Error in DB connection: ' + error);
  }
};

export default dbConnect;
