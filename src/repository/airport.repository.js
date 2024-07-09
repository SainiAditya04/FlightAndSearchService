const { Airport } = require("../models/index");

class AirportRepository{
    async createAirport(data){
        try{
            const airport = await Airport.create(data);
            return airport;
        }
        catch(error){
            console.log("Error in airport repository");
            throw error;
        }
    }
}

module.exports = AirportRepository;