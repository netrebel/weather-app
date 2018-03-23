const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(encodeURIComponent(argv.a));

var address = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCxb1MxWWO90aVXiWfSqtF7TeyAM_c4uXY`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitud: ${body.results[0].geometry.location.lng}`);
});
