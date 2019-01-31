//Express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

//Files
const expressMiddleware = require('./middleware/index.js');

//Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Frontend Route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

//Server
app.listen(port, () => console.log('Server running on localhost 3000!'));

//Export App
module.exports = app;