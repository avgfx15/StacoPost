// | Import mongoose
import mongoose from 'mongoose';

// | Import dotenv Module
import dotenv from 'dotenv';
// ` Configure dotenv variable
dotenv.config({ override: true });

// ` Configure DB Connect With MongoDB
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB Connection Succeeded.');
  } catch (error) {
    console.log('Error in DB connection: ' + error);
  }
};

// ~ Export DBConnect
export default dbConnect;
