import mongoose from 'mongoose';

export const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: {
      type: String,
      unique: true, 
      required: true
    },
    password: String,
    verified: Boolean,
    profileCompletion: Number,
    bio: String,
    avatar: String,
    firstName: String,
    lastName: String,
    rating: Number,
    membership: String,
    phoneNumber: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    },
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
      }
    ],
  })
);
