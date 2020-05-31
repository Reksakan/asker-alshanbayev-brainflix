const express = require('express'); 
const app = express();
const cors = require('cors');
const axios = require('axios'); 
const listOfVideosRoutes = require('./data/VidList'); 
const listOfVideosDescRoutes = require('./data/VidDesc');

// const listOfVideosDesc = require('./Data/dataVidDesc.json'); //should go to the new VidDesc.js

// console.log(listOfVideosDesc); //Delete before submitting - currently working good

require('dotenv').config();

const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json()); 

app.use('/', listOfVideosRoutes);
app.use('/videos', listOfVideosDescRoutes);

app.listen(port, () => console.log(`Server is running at the ${port}`));