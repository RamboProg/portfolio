// routes/projects.js
const express = require('express');
const router = express.Router();
const projectsData = require('../data/projects.json');

router.get('/', (req, res) => {
    res.json(projectsData);
});

module.exports = router;
