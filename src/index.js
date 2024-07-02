const express = require('express');
require('dotenv').config();

const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
    const app = express();

    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.json());

    app.use('/api', ApiRoutes);
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`The server started at ${PORT}`);
    });
};

setupAndStartServer();

