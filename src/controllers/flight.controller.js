const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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

module.exports = {
    create,
    getAll,
}