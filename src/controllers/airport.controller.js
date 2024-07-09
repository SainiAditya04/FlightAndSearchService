const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try{
        const airport = await airportService.createAirport(req.body);
        return res.status(200).json({
            message: "airport created successfully",
            success: true,
            data: airport
        });
    }
    catch(error){
        return res.status(500).json({
            message: "failed to create airport",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
}