const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            // if arrival time is less than departure time, it is not possible
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw { error: "Arrival time cannot be less than departure time" }
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });

            return flight;
        }
        catch (error) {
            console.log("Error in flights service");
            throw { error };
        }
    }

    async getFlightData() {
        try {

        }
        catch (error) {
            console.log("Error in flights service");
            throw { error };
        }
    }
}

module.exports = FlightService;