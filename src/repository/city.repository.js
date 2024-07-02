// const City = require('../models/city');
const { City } = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        }
        catch(error){
            console.log("Error while creating the city!")
            throw(error);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        }
        catch(error){
            console.log("Error while deleting the city!")
            throw(error);
        }
    }
}

module.exports = CityRepository;