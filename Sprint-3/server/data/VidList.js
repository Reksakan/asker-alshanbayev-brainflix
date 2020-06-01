const express = require('../node_modules/express');
const router = express.Router();
const listOfVideos = require('./dataVidList.json');

// const { v4:uuidv4 } = require('uuid'); 

router.get('/', (request, response) => {
    return response.status(200).json(listOfVideos);
}); 

router.post('/', (request, response) => {
    
    const newVidList = {
        id: request.body.id,
        title: request.body.title,
        channel: request.body.channel,
        image: request.body.image
    };

    listOfVideos.unshift(newVidList); 

    return response.status(200).json(request.body);
   
});

module.exports = router; 