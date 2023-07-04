const express = require('express');
const teams = require('./routes/teams.route')

const App = express();

app.use(express.json());

app.use('/teams', teams);

module.exports = App;