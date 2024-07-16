const express = require('express');

// import controllers
const cityController = require('../../controllers/city.controller');
const flightController = require('../../controllers/flight.controller');
const airportController = require('../../controllers/airport.controller');

// import middlewares
const { FlightMiddlewares } = require("../../middlewares/index");

const router = express.Router();

// airport routes
router.post('/airports', airportController.create);

// city routes
router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

// flight routes
router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    flightController.create
);
router.get('/flights', flightController.getAll);
router.get('/flights/:id', flightController.get);
router.patch('/flights/:id', flightController.update);



module.exports = router;

