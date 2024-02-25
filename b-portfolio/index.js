// index.js
//import env from 'dotenv';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
path = require('path');

//Routes
const home = require('./routes/home');
app.use('/', home);

const projects = require('./routes/projects');
app.use('/projects', projects)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../portfolio/build')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
