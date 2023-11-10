const mongoose = require("mongoose");

const profilSchema = mongoose.Schema(
  {
    pseudo: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    // pwd: {
    //   type: [String],
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", profilSchema);
