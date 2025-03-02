const express = require('express');
const weatherRoutes = require('./routes/weather');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Use weather routes for all `/weather` endpoints
app.use('/weather', weatherRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('🌤️ Weather API is running on Render! 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT ${PORT}`);
});
