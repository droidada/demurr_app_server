import mongoose from 'mongoose';

export const Sheet = mongoose.model(
    "Sheet",
    new mongoose.Schema({
      serialNo: Number,
      invoiceNo: Number,
      billOfLadenNo: Number,
      type: {
        type: String,
        enum : ['20DRY','40HIGH', '40FLAT', '40OPEN'],
        default: '20DRY'
      },
      request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request"
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      },
      units: Number,
      freeStart: Date,
      freeEnd: Date,
      detStart: Date,
      detEnd: Date,
      freeDays: Number, 
      billableDays: Number,
      provisionalInvoiceAmount: Number,
      finalInvoiceAmount: Number,
      demurrageExcVat: Number,
      vat: Number,
      totalDemurrage: Number,
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    })
  );
  