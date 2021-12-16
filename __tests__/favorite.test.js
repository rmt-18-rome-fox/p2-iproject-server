const request = require('supertest')
const app = require('../app')
const { User, Movie, Favorite, Genre } = require('../models')
const { createToken } = require('../helpers/jwt')
const jwt = require('jsonwebtoken')

let tokenAdmin = null
let token = null

const admin = {
    username: 'admin',
    email: 'admin@mail.com',
    password: 'adminadmin',
    phoneNumber: '0812312321',
    address: 'Solo',
    role: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date()
}

const customer = {
    username: 'customer',
    email: 'customer@mail.com',
    password: 'customer',
    phoneNumber: '081231233123',
    address: 'Solo',
    role: 'Customer',
    createdAt: new Date(),
    updatedAt: new Date()
}

beforeAll(async () => {
    await User.destroy({
        where: {},
        truncate: true,
        restartIdentity: true,
        cascade: true
    });

    await Movie.destroy({
        where: {},
        truncate: true,
        restartIdentity: true,
        cascade: true
    });

    await User.create(customer)

    token = createToken({id: 1, username: 'customer', email: 'customer@mail.com'})

    await User.create(admin)

    tokenAdmin = createToken({id: 2, username: 'admin', email: 'admin@mail.com'})

    await Movie.bulkCreate([
        {
            title: 'test1',
            synopsis: 'synopsis1',
            trailerUrl: 'trailer1',
            imgUrl: 'img1',
            rating: 1,
            GenreId: 1,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'test2',
            synopsis: 'synopsis2',
            trailerUrl: 'trailer2',
            imgUrl: 'img2',
            rating: 2,
            GenreId: 2,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'test3',
            synopsis: 'synopsis3',
            trailerUrl: 'trailer3',
            imgUrl: 'img3',
            rating: 3,
            GenreId: 3,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'test4',
            synopsis: 'synopsis4',
            trailerUrl: 'trailer4',
            imgUrl: 'img4',
            rating: 4,
            GenreId: 4,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'test5',
            synopsis: 'synopsis5',
            trailerUrl: 'trailer5',
            imgUrl: 'img5',
            rating: 5,
            GenreId: 5,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'test5',
            synopsis: 'synopsis5',
            trailerUrl: 'trailer5',
            imgUrl: 'img5',
            rating: 2,
            GenreId: 5,
            AuthorId: 1,
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ])
})

describe('public/favorite', () => {
    test('success addFavorite', (done) => {
        request(app)
        .post('/public/favorite/1')
        .set('token', token)
        .send({
            UserId: 1,
            MovieId: 1
        })
        .then((res) => {
            const result = res.body;
            expect(res.status).toBe(201);
            expect(result).toEqual(expect.any(Object))
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('MovieId');
            expect(result).toHaveProperty('UserId');

            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('fail addFavorite', (done) => {
        request(app)
        .post('/public/favorite/999')
        .set('token', token)
        .send({
            UserId: 1,
            MovieId: 1
        })
        .then((res) => {
            const result = res.body;
            expect(res.status).toBe(404);
            expect(result).toEqual(expect.any(Object))
            expect(result).toHaveProperty('msg', 'Data is not found');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('success showFavorite', (done) => {
        request(app)
        .get('/public/favorite')
        .set('token', token)
        .then((res) => {
            const result = res.body;
            expect(res.status).toBe(200);
            expect(result).toEqual(expect.any(Array));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('failed showFavorite notLogin', (done) => {
        request(app)
        .get('/public/favorite')
        .then((res) => {
            const result = res.body;
            expect(res.status).toBe(401);
            expect(result).toEqual(expect.any(Object))
            expect(result).toHaveProperty('msg', 'Your token is not match');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('failed showFavorite notLogin, role is not customer', (done) => {
        request(app)
        .get('/public/favorite')
        .set('token', tokenAdmin)
        .then((res) => {
            const result = res.body;
            expect(res.status).toBe(403)
            expect(result).toEqual(expect.any(Object))
            expect(result).toHaveProperty('msg', 'Forbidden to access');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })
})