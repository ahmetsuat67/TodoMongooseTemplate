"use strict"

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    // _id: AUTO CREATED
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 64,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
        required: true,
    },
    
}, {
    collection: "todos",
    timestamps: true,
}
);

module.exports = {
    Todo: mongoose.model("Todo", todoSchema)
}