const { AirportService } = require('../services/index');

const airportServices = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportServices.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created a airport',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to make the airport',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const airport = await airportServices.deleteAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully deleted the airport',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the airport',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportServices.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully fetched the airport',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airport',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportServices.createAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully patched the airport',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to patch the airport',
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    destroy,
    update
}