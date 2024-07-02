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
            // throw{error}
            throw(error);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch(error){
            console.log("Error while deleting the city!")
            throw(error);
        }
    }

    async updateCity(cityId, data){
        try{
            const updatedCity = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return updatedCity;
        }
        catch(error){
            console.log("Error while updating the city!");
            throw {error};
        }
    }

    async getCity(cityId){
        try { 
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Error while fetching the details of the city");
            throw {error};
        }
    }
}

module.exports = CityRepository;
