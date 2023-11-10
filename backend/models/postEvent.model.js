const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
    },
    // img: {
    //     type:
    // },
    howMuch: {
      type: Number,
    },
    activity: {
      type: [],
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
