// const request = require("request");
//
// let getWeather = (lat, lng, callback) => {
//   request({
//     url: `https://api.darksky.net/forecast/fecbeab4bc5e5d8077514ca7bb23a5dc/${lat},${lng}`,
//     json: true,
//   }, (error, response, body) => {
//     if (error){
//       callback("Unable to connect to forecast.io servers.");
//     }
//     else if (!error && response.statusCode === 200){
//       callback(body.currently.temperature);
//     } else {
//       callback(undefined, {
//         temperature: body.currently.temperature,
//         apparentTemperature: body.currently.apparentTemperature,
//     })
//   };
//   })
// }
//
// module.exports.getWeather = getWeather;
