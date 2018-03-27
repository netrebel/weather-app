const request = require('request');

const API_KEY = '';

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to connect to Forecast servers.');
    }
  });
};

module.exports = {
  getWeather
}
