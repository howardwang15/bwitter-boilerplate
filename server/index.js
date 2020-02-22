const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve('../.env') });
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());  // enable requests coming from different origins
app.use(bodyParser.urlencoded({
    extended: true
}));  // decode body of requests
app.use(bodyParser.json());

app.use('/api', require('./app').api.router);  // use the api router to handle incoming requests
app.listen(process.env.SERVER_PORT, () => console.log(`node server running on port ${process.env.SERVER_PORT}...`));
