const { CityService } = require('../services/index.js');

const cityService = new CityService();

const create = async (req, res) => {
    // whenever we create, its a POST request
    // data will come from req.body()
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created the city!"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create city!"
        });
    }
}

const destroy = async (req, res) => {
    // we use DELETE to delete
    // and the id we get from the params, /city/:id
    try {
        const { id } = req.params;
        const response = await cityService.deleteCity(id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Deleted the city successfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete city!"
        });
    }
}

const get = async (req, res) => {
    // We use GET to get the details
    // we get the id from the params, /city/:id
    try {
        const { id } = req.params;
        const city = await cityService.getCity(id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully, fetched the details of city"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to get the city!"
        });
    }
}

const update = async (req, res) => {
    // We use PATCH to update something
    // get the id from the params, /city/:id
    try {
        const { id } = req.params;
        const updatedCity = await cityService.updateCity(id, req.body);
        return res.status(200).json({
            data: updatedCity,
            success: true,
            message: "successfully updated the city!"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to update city!"
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
}