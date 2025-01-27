const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error.codes");

const flightService = new FlightService();

const create = async (req, res) => {
    try{ 
        const flightRequestData =  {
            flightNumber : req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            message: "Flight created successfully",
            success: true,
            data: flight,
        });
    }
    catch(error){
        console.log(`Error in the flight controller`);
        return res.status(500).json({
            message: "Failed to create flight",
            success: false,
            data: [error]
        });
    }
}

const getAll = async(req, res) => {
    try{
        // we get the filter data from req.query
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            message: "successfully fetched the details of flights",
            success: true,
            data: flights,
        });
    }
    catch(error){
        console.log("Error in flight repository");
        return res.status(500).json({
            message: "failed to fetch flights details",
            success: false,
            data: [error]
        });
    }
}

const get = async(req, res) => {
    try{
        const flight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            message: "Successfully fetched the details of flight",
            success: true,
            data: flight
        });
    }
    catch(error){
        console.log("Error in flight repository");
        return res.status(500).json({
            message: "failed to fetch flights details",
            success: false,
            data: [error]
        });
    }
}

const update = async(req, res) => {
    try{
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(200).json({
            message: "Successfully updated the flight",
            success: true,
            data: response
        });
    }
    catch(error){
        console.log("Error in flight controller");
        return res.status(500).json({
            message: "failed to update flight details",
            success: false,
            data: [error]
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update,
}