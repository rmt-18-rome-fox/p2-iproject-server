const axios = require('axios');

const getAnime = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 24;
    const anime = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`)
    res.status(200).json(anime.data)
  } catch (err) {
    next(err)
  }
}

const getAnimeDetail = async (req, res, next) => {
  try {
    const jikanAnimeId = req.params.jikanAnimeId;
    const animeDetail = await axios.get(`https://api.jikan.moe/v4/anime/${jikanAnimeId}`)
    res.status(200).json(animeDetail.data)
  } catch (err) {
    next(err);
  }
}

module.exports = {getAnime, getAnimeDetail};