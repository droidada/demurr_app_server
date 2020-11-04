import mongoose from 'mongoose';

export const Bank = mongoose.model(
    "Bank",
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
  