const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20Lombard%20Street%20philadelphia&key=AIzaSyCxb1MxWWO90aVXiWfSqtF7TeyAM_c4uXY',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
