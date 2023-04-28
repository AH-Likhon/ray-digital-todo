const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const callback = () => {
    console.log('Connected')
};


mongoose.connect(`${process.env.DB}`, options)
    .then(() => {
        console.log('Connected to Mongoose')
    });


app.get('/', (req, res) => {
    res.send('Welcome to Ray Digital Todo Server!!!');
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})