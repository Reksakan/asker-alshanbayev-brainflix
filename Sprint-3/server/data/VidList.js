const express = require('../node_modules/express');
const router = express.Router();
const listOfVideos = require('./dataVidList.json');

router.get('/', (request, response) => {
    return response.status(200).json(listOfVideos);
});

router.post('/', (request, response) => {
    console.log('New VidList Data: ', request.body.id, request.body.title, request.body.chanel, request.body.image);
    const newVidList = {
        id: request.body.id,
        title: request.body.title,
        channel: request.body.channel,
        image: request.body.image
    }
    listOfVideos.unshift(newVidList);
});

module.exports = router; 