const axios = require('axios');
const getWeather = async (nameCity) => {
    let response = await
    axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q: nameCity,
            appid:'b9beb914789362be7c45db2c86149e0a'
        }
    })

    return Math.floor(response.data.main.temp - 273);
}

module.export = {
    getWeather
}