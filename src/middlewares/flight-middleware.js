const { ClientErrorCodes } =  require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.airplaneId ||
        !req.body.flightNumber ||
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price ||
        !req.body.boardingGate
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: [],
            message: 'Bad Request body for flight creation',
            success: false,
            error: 'Missing mandatory properties for creation of flight'
        });
    }

    next();
}


module.exports = {
    validateCreateFlight
}