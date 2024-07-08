const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try{
        // console.log(req.body);
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

module.exports = {
    create,
}