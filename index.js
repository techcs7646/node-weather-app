const express = require('express');
const weatherRoutes = require('./routes/weather');
require('dotenv').config();

const app = express();
const port = 3000;

// Use weather routes for all `/weather` endpoints
app.use('/weather', weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
