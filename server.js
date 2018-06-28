const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes/index')
const PORT = process.env.PORT || 3001;

//define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist')

//start the API server

app.listen(PORT, () => {
    console.log(`API listenitng on PORT ${PORT}`)
});