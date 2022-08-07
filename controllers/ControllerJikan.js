const axios = require('axios');

const getAnime = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const anime = await axios.get(`https://api.jikan.moe/v3/top/anime/${page}`)
    res.status(200).json(anime.data)
  } catch (err) {
    next(err)
  }
}

const getAnimeDetail = async (req, res, next) => {
  try {
    const jikanAnimeId = req.params.jikanAnimeId;
    const animeDetail = await axios.get(`https://api.jikan.moe/v3/anime/${jikanAnimeId}`)
    res.status(200).json(animeDetail.data)
  } catch (err) {
    next(err);
  }
}

module.exports = {getAnime, getAnimeDetail};