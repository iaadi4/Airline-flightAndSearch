const express = require('express');
const cityController = require('../../controllers/city-controller');
const airportController = require('../../controllers/airport-controller');
const flightController = require('../../controllers/flight-controller');

const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

router.post('/airport', airportController.create);
router.delete('/airport/:id', airportController.destroy);
router.get('/airport/:id', airportController.get);
router.patch('/airport/:id', airportController.update);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    flightController.create
);
router.get('/flights', flightController.getAll);

module.exports = router;