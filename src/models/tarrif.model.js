import mongoose from 'mongoose';

export const Tarrif = mongoose.model(
    "Tarrif",
    new mongoose.Schema({
      dryLower: Number,
      dryUpper: Number,
      dry20Feet: Number,
      dry40Feet: Number,
      reefLower: Number,
      reefUpper: Number,
      reef20Feet: Number,
      reef40Feet: Number,
      flatLower: Number,
      flatUpper: Number,
      flat20Feet: Number,
      flat40Feet: Number,
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        unique: true, 
        required: true
      },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      createdOn: Date,
      updatedOn: Date
    })
  );
  