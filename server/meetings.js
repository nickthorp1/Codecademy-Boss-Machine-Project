const express = require('express');
const meetingsRouter = express.Router();

// Import helper functions for working with "database" arrays
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

// GET /api/meetings to get an array of all meetings
meetingsRouter.get('/', (req, res, next) => {
    const allMeetins = getAllFromDatabase('meetings');
    res.status(200).send(allMeetins);
})

// POST /api/meetings to create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => { 
    const meeting = createMeeting();
    addToDatabase('meetins',meeting);
    res.status(201).send(addToDatabase('meetings',meeting));
})

// DELETE /api/meetings to delete all meetings from the database
meetingsRouter.delete('/', (req, res, next) => {  
    deleteAllFromDatabase('meetings');
    res.status(204).send(deleteAllFromDatabase('meetings'));
})


module.exports = meetingsRouter;