const request = require('request')

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombardi%20stress%20philadelphia',
  json: true
}, (error, resonse, body) => {
  console.log(JSON.stringify(body, undefined, 2))
})