const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');
const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {
    
    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log('Server started at', PORT);
        
    });
}

setupAndStartServer();