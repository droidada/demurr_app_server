import mongoose from 'mongoose';

export const Company = mongoose.model(
    "Company",
    new mongoose.Schema({
      name: String,
      description: String,
      rcNo: Number,
      addresses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Address"
        }
      ],
    })
  );