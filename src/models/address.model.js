import mongoose from 'mongoose';

export const Address = mongoose.model(
    "Address",
    new mongoose.Schema({
      city: String,
      state: String,
      zipCode: String,
      line1: String,
      line2: String,
      title: String,
      name: String,
      phoneNumber: String,
      instructions: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank"
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      },
    })
  );
  