const { Flights } = require("../models/index");
const { Op } = require("sequelize");


class FlightRepository {
    #createFilter(data) {
        // let fiter = {...data};
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // the following code is working fine
        // if (data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: { [Op.lte]: data.maxPrice } },
        //             { price: { [Op.gte]: data.minPrice } }
        //         ]
        //     });
        // }
        // else if (data.minPrice) {
        //     Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        // }
        // else if (data.maxPrice) {
        //     Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        // }

        // the following code is another way of writing the price wala logic
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }

        Object.assign(filter, { [Op.and]: priceFilter });

        console.log(filter);
        return filter;
    }

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
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch (error) {
            console.log("Error in flights repository");
            throw { error };
        }
    }

    // we have filtered city based on just name
    // because city is just having a name
    // but flight can have a lot of filtering options available
    // here we can have custom filter
    // filter based on price, arrival time, etc.
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });

            return flights;
        }
        catch (error) {
            console.log("Error in flight here repository");
            throw { error };
        }
    }
}

module.exports = FlightRepository;