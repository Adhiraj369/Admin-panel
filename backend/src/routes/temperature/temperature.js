const express = require('express');
const axios = require('axios');


const temp = express.Router();


const DEHRADUN_COORDS = {
  lat: 30.3165,
  lon: 78.0322,
};

temp.get('/temperature', async (req, res) => {
  try {
    const { lat, lon } = DEHRADUN_COORDS;

    // Open-Meteo API to get current temperature
    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

    // Extract temperature from response
    const temperature = weatherResponse.data.current_weather.temperature;

    // Send temperature back as JSON
    res.json({ temperature });
  } catch (error) {
    console.error('Error fetching temperature:', error);
    res.status(500).json({ error: 'Failed to fetch temperature' });
  }
});

module.exports = temp;
