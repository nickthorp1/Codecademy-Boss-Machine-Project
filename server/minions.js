const express = require('express');
const minionsRouter = express.Router();

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

  // Minion ID rout param
  minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send();
    }
  });

// GET /api/minions to get an array of all minions
  minionsRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('minions'));
});

// GET /api/minions/:minionId to get a single minion by id.
  minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
  });

  // PUT /api/minions/:minionId to update a single minion by id
  minionsRouter.put('/:minionId', (req, res, next) => { 

    if(req.body.id !== undefined || req.body.id === NaN){
        updateInstanceInDatabase('minions',req.body)
    res.send(updateInstanceInDatabase('minions',req.body));
    } 
    else {
        res.sendStatus(404).send();
    }
  });

  // POST /api/minions to create a new minion and save it to the database
  minionsRouter.post('/',(req, res, next) => {  
    
    addToDatabase('minions',req.body);
    res.status(201).send(addToDatabase('minions',req.body));
  });

  // DELETE /api/minions/:minionId to delete a single minion by id
minionsRouter.delete('/:minionId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});

module.exports = minionsRouter; 