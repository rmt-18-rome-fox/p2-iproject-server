function errorHandler(err, req, res, next) {
    res.send(err)
    // if (err.errors.length > 0) {
    //     res.send(err.errors[0].message)
    // }
}

module.exports = errorHandler