const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

// Function to fetch weather data from OpenWeather API
const getWeatherData = async (address) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      cityName: data.name,
      temperature: data.main.temp,
      sunsetTime: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = { getWeatherData };
