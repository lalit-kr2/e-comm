const axios = require('axios');

axios.get('https://dummyapi.online/api/products')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching movie data:', error.message);
  });
