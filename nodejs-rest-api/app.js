const express = require('express');
const axios = require('axios');
const moment = require('moment');
const os = require('os');
require('dotenv').config();


const app = express();
const port = 3000;

app.get('/api/hello', async (req, res) => {
  try {
    const hostname = os.hostname();
    const datetime = moment().format('YYYY-MM-DD HH:mm');
    const version = '3.3';

    // Fetch weather data for Dhaka
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const weatherApiKey = process.env.WEATHER_API_KEY || 'default_key';
    const weatherResponse = await axios.get(`${weatherApiUrl}?q=Dhaka&appid=${weatherApiKey}`);
    const temperature = (weatherResponse.data.main.temp - 273.15).toFixed(2);

    const responseData = {
      hostname,
      datetime,
      version,
      weather: {
        dhaka: {
          temperature,
          temp_unit: 'C',
        },
      },
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
