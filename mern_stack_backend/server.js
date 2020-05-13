const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true }
);

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

mongoose.connection.once('error',(err)=>{
  console.log("Error"+err)
})


app.use('/utilisateur', require('./routes/utilisateur'));


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
