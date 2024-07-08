const { Flights } = require("../models/index");

class FlightRepository {
    async createFlight(data) {
        try {
            // console.log(data)
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error) {
            console.log("Error in flights repository");
            throw { error };
        }
    }

    async deleteFlight(flightId) {
        try {

        }
        catch (error) {
            console.log("Error in flights repository");
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {

        }
        catch (error) {
            console.log("Error in flights repository");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {

        }
        catch (error) {
            console.log("Error in flights repository");
            throw { error };
        }
    }
}

module.exports = FlightRepository;