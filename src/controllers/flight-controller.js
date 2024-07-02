const { FlightService } = require('../services/index');
const { compareTime } = require('../utils/helper');

const flightService = new FlightService();


const create = async (req, res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created the flight',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getAllFlight(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the flights details.',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
}