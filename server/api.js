const express = require('express');
const app = require('../server')
const apiRouter = express.Router();

// Mounting routers 

const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
