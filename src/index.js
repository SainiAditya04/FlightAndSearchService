import express from "express"
import 'dotenv/config';

const setupAndStartServer = async () => {
    const app = express();

    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended: true}))
    
    app.use(express.json());
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`The server started at ${PORT}`);
    });
};

setupAndStartServer();