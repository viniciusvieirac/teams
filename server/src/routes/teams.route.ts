const express = require('express');

const router = express.Router();

router.get('/', teamsController.getAllTeams);

module.exports = router;