const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ){
        return res.status(400).json({
            message: "Invalid request body for creating the flight",
            success: false,
            err: "All fields are mandatory"
        });
    }

    // if every field is present, then we don't have to do anything
    // just call the next middleware
    next();
}

module.exports = {
    validateCreateFlight,
}