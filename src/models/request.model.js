import mongoose from 'mongoose';

export const Request = mongoose.model(
    "Request",
    new mongoose.Schema({
      name: String,
      stage: {
        type: String,
        enum : ['REQUEST','APPLICATION', 'SUBMISSION'],
        default: 'REQUEST'
      },
      status: {
        type: String,
        enum : ['PENDING','COMPLETED'],
        default: 'PENDING'
      },
      sheet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
      },
      bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank"
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      },
      dateCreated: Date,
      dateUpdated: Date,
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    })
  );
  