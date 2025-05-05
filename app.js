const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")



const indexfile = require('./router/index.js')

// DOTENV CONFIGURATION
dotenv.config();



// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/',indexfile)


const dbURI = `mongodb+srv://name:password@cluster0.0tq4xsw.mongodb.net/apex_booking_hospital?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI)
  .then(() => 
    {
      app.listen(7001);
      console.log('MongoDB connected...')})
  .catch(err => console.log(err));  
