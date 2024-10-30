const { CityService } = require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const cityServices = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityServices.createCity(req.body);
        return res.status(SuccessCodes.CREATE).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            error: {}
        }); 
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to make the city',
            err: error
        });
    }
}

//DELETE -> city/:id in URL (rest api)
const destroy = async (req, res) => {
    try {
        const response = await cityServices.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            error: {}
        }); 
    } catch(error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

//GET -> city/:id
const get = async (req, res) => {
    try {
        const response = await cityServices.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            error: {}
        }); 
    } catch(error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the city',
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        const response = await cityServices.getAllCity(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched all cities',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities',
            err: error
        });
    }
}

//PATCH -> city/:id
const update = async (req, res) => {
    try {
        const response = await cityServices.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            error: {}
        }); 
    } catch(error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    } 
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}