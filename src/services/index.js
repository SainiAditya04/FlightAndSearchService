// the only purpose of creating this file is to export all the services we have created
// in a single object, 

const CrudService = require('./crud-service');


module.exports = {
    CityService: require('./city-service'),
    FlightService: require('./flight-service'),
    AirportService: require('./airport-service'),
    CrudService: require('./crud-service'),
}