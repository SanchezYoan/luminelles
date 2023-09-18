const mongoose = require("mongoose");


const postSchema = mongoose.Schema(
    {
        message: {
            type: String;
            required: true,
        },
        auhtor: {
            type: String,
            required: true
        },
        likers: {
            type: [String]
        },
    },
    {
        timestamps: true
    }
)
