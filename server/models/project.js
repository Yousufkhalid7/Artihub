const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    images:[
        {
            type: String,
        },
    ],
    category:{
        type: String,
    },
    tags:[
        {
            type: String,
        },
    ],
    freelancer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    pricing:{
        basic: {type: Number, required: true},
        standard:{type:Number},
        premium:{type:Number},
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Project", projectSchema);