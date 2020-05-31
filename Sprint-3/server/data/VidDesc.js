const express = require('../node_modules/express');
const router = express.Router();
const listOfVideosDesc = require('./dataVidDesc.json');

router.get('/', (request, response) => {
    return response.status(200).json(listOfVideosDesc);
});

router.get('/:currentVidId', (request, response) => {
    return response.status(200).json(listOfVideosDesc.filter(currentVid => {
        return currentVid.id === request.params.currentVidId;
    }));
});

router.post('/', (request, response) => {
    console.log('New Vid Description: ', request.body) 
    const newVidDesc = request.body;
    listOfVideosDesc.push(newVidDesc);
});

module.exports = router; 