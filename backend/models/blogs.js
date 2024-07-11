const mongoose = require('mongoose');
const { title } = require('process');

const Blogs = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Blogs", Blogs);