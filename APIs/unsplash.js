const axios = require("axios");

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "r1SefPkNwhnq5e0uDLUG4jZ67qS6BRkOMi_Qy_Y4loU",
  },
});

module.exports = unsplash;
