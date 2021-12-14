const request = require('supertest')
const app = require('../app')
const { User } = require('../models')

beforeAll(async () => {
    User.destroy({
        where: {},
        truncate: true,
        restartIdentity: true,
        cascade: true,
    })
})

describe('POST /public/register"', () => {
    test("[register - success]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer1',
                email: 'customer1@mail.com',
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //201
                const result = res.body
                expect(res.status).toBe(201)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('id', 1)
                expect(result).toHaveProperty('username', 'customer1')
                expect(result).toHaveProperty('email', 'customer1@mail.com')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - email null]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: null,
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('Email is can not be null')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - password null]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: 'customer1@mail.com',
                password: null,
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('Password is can not be null')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - email empty]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: '',
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('Fill the email!')
                expect(result.msg[1]).toBe('False email format')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - password empty]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: 'customer@mail.com',
                password: '',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('Fill the password!')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - username unique]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer1',
                email: 'customer@mail.com',
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('username must be unique')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - email unique]", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: 'customer1@mail.com',
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('email must be unique')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[register - email format false", (done) => {
        request(app)
            .post('/public/register')
            .send({
                username: 'customer',
                email: 'customer1mail.com',
                password: 'customer',
                phoneNumber: '0812321321',
                address: 'Solo'
            })
            .then((res) => {
                //400
                const result = res.body
                expect(res.status).toBe(400)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg')
                expect(result.msg).toEqual(expect.any(Array))
                expect(result.msg[0]).toBe('False email format')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

})


describe('POST /public/login"', () => {
    test("[login - success]", (done) => {
        request(app)
            .post('/public/login')
            .send({
                email: 'customer1@mail.com',
                password: 'customer',
            })
            .then((res) => {
                //200
                const result = res.body
                expect(res.status).toBe(200)
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('token')
                expect(result.token).toEqual(expect.any(String))
                expect(result).toHaveProperty('dataUser')
                expect(result.dataUser).toEqual(expect.any(Object))
                expect(result.dataUser).toHaveProperty('id', 1)
                expect(result.dataUser).toHaveProperty('email', 'customer1@mail.com')
                expect(result.dataUser).toHaveProperty('role', 'Customer')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[login - wrong email/pass]", (done) => {
        request(app)
            .post('/public/login')
            .send({
                email: 'customer1@mail.com',
                password: 'customer1',
            })
            .then((res) => {
                //200
                const result = res.body
                expect(res.status).toBe(401)
                console.log(result);
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg', 'username/password is not found')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test("[login - email notFound]", (done) => {
        request(app)
            .post('/public/login')
            .send({
                email: 'customer12@mail.com',
                password: 'customer1',
            })
            .then((res) => {
                //200
                const result = res.body
                expect(res.status).toBe(500)
                console.log(result);
                expect(result).toEqual(expect.any(Object))
                expect(result).toHaveProperty('msg', 'Internal Server Error')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
})

