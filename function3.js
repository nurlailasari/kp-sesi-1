const axios = require('axios');

//then
axios.get('https://api2-lb.jubelio.com/ping')
  .then(function(response) {
    // handle success
    console.log(response.data);
})

//async await
async function callApi() {
  const response = await axios.get('https://api2-lb.jubelio.com/ping');
  console.log(response.data);
}
callApi();