const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const port = process.env.PORT || 5000;

const routes = require('./routes/routes');


//middleware
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000/']
}));
app.use(express.json());

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(`${process.env.DB}`, options)
    .then(() => {
        console.log('Connected to Mongoose')
    });

app.use('/api', routes);


app.listen(port, () => {
    console.log(`listening at ${port}`)
})