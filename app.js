const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

var address = encodeURIComponent(argv.address);
console.log('address to search: ' + address);

geocode.geocodeAddess(address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(JSON.stringify(results, undefined, 2)); //2 spaces formatting
  };
});
