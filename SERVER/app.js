// Import required modules
const express = require('express');
//const { mongo, default: mongoose } = require('mongoose');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const ProductRoutes = require('./routes/index.js')
const cors = require('cors');
const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(ProductRoutes)

mongoose.connect("mongodb+srv://KUMEL:kumel1234@cluster0.eyadver.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{}).then(()=>{
  console.log("Connected to Mognodb");
}).catch((err)=>{
    console.log("Error !", err);
  })

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
