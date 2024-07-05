const express = require('express');
require('dotenv').config();

const ApiRoutes = require('./routes/index');

const { Airport, City, Airplane } = require('./models/index');
const db = require('./models/index');
const { where } = require('sequelize');

const setupAndStartServer = async () => {
    const app = express();

    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.json());

    app.use('/api', ApiRoutes);
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, async () => {
        console.log(`The server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({ alter: true });
        }

        await Airplane.create({
            modelNumber: "Douglas DC-3"
        })
    });
};

setupAndStartServer();

