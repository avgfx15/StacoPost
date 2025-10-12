import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    savedPost: {
      type: [String],
      default: [],
    },
    password: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

//Export the model
const UserModel = mongoose.model('UserModels', userSchema);

export default UserModel;
