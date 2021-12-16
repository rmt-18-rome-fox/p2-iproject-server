const request = require('supertest')
const app = require('../app')
const { Movie } = require('../models')

beforeAll(async () => {
    Movie.create({
        title : "Title1", 
        synopsis: "Synopsis1", 
        trailerUrl: "Trailer1", 
        imgUrl: "image1", 
        rating: 10, 
        GenreId: 1, 
        AuthorId: 1, 
        status: 'Active'
    })

    Movie.create({
        title : "Title2", 
        synopsis: "Synopsis2", 
        trailerUrl: "Trailer2", 
        imgUrl: "image2", 
        rating: 9, 
        GenreId: 1, 
        AuthorId: 1, 
        status: 'Active'
    })

    Movie.create({
        title : "Title3", 
        synopsis: "Synopsis3", 
        trailerUrl: "Trailer3", 
        imgUrl: "image3", 
        rating: 8, 
        GenreId: 1, 
        AuthorId: 1, 
        status: 'Active'
    })

    Movie.create({
        title : "Title4", 
        synopsis: "Synopsis4", 
        trailerUrl: "Trailer4", 
        imgUrl: "image4", 
        rating: 7, 
        GenreId: 1, 
        AuthorId: 1, 
        status: 'Active'
    })

    Movie.create({
        title : "Title1", 
        synopsis: "Synopsis5", 
        trailerUrl: "Trailer5", 
        imgUrl: "image5", 
        rating: 6, 
        GenreId: 1, 
        AuthorId: 1, 
        status: 'Active'
    })

    Movie.destroy({
        where: {},
        truncate: true,
        restartIdentity: true,
        cascade: true,
    })
})

describe('GET /public/movies"', () => {
    test("[showMovie - success]", (done) => {
        request(app)
            .get('/public/movies?page=1')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                done()
            })
            .catch((err) => {
                done(err);
            })
        })

    test("[showMovie - 1 filter - success]", (done) => {
        request(app)
            .get('/public/movies?page=1&title=Title1')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                done()
            })
            .catch((err) => {
                done(err);
            })
        })

    test("[showMovie - 2 filter - success]", (done) => {
        request(app)
            .get('/public/movies?page=1&title=Title1&rating=6')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                done()
            })
            .catch((err) => {
                done(err);
            })
        })

    test("[showMovie - page++ - success]", (done) => {
        request(app)
            .get('/public/movies?page=3')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                done()
            })
            .catch((err) => {
                done(err);
            })
        })

    test("[showDetailMovie - success]", (done) => {
        request(app)
            .get('/public/movies/1')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                done()
            })
            .catch((err) => {
                done(err);
            })
        })

    test("[showDetailMovie - fail]", (done) => {
        request(app)
            .get('/public/movies/10')
            .then((res) => {
                const result = res.body
                expect(res.status).toBe(404)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg', 'Data is not found')
                done()
            })
            .catch((err) => {
                done(err);
            })
        })
            
})