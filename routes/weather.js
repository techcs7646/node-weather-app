const express = require('express');
const { getWeatherData } = require('../controller/weatherController');

const router = express.Router();

// Route to fetch weather data
router.get('/', async (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.status(400).send('Address query parameter is required');
  }

  try {
    const weatherData = await getWeatherData(address); // Call the model to fetch data
    const { cityName, temperature, sunsetTime } = weatherData;
console.log({ cityName, temperature, sunsetTime })
    const message = `
      City Name: ${cityName}<br>
      Temperature: ${temperature}&deg;C<br>
      Sunset Time: ${sunsetTime}
    `;
    res.send(`<html><body><div id='container'><h1>${message}</h1></div></body></html>`);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while fetching weather data');
  }
});

module.exports = router;
