const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose
            .connect(`${process.env.URI}`)
            .then(() => console.log("connected to DB"));
    } catch (error) {
        console.log(error)
    }
};

conn();