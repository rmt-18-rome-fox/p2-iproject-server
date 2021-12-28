const axios = require('axios');

const getAnime = async (req, res, next) => {
  try {
    console.log('masuk sini');
    const page = req.query.page || 1;
    const jikanAnimeId = req.query.jikanAnimeId
    console.log({page});
    const anime = await axios.get(`https://api.jikan.moe/v3/top/anime/${page}`)
    // console.log({anime});
    res.status(200).json(anime.data)
  } catch (err) {
    console.log({err});
    next(err)
  }
}

const getAnimeDetail = async (req, res, next) => {
  try {
    console.log('masuk sini');
    const jikanAnimeId = req.params.jikanAnimeId;
    console.log({jikanAnimeId})
    const animeDetail = await axios.get(`https://api.jikan.moe/v3/anime/${jikanAnimeId}`)
    res.status(200).json(animeDetail.data)
  } catch (err) {
    console.log({err});
    next(err);
  }
}

module.exports = {getAnime, getAnimeDetail};