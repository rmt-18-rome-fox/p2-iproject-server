const adminAuthorization = (req, res, next) => {
    try {
        const userRole = req.user.role
        const AdminId = req.user.Admin

        if (userRole !== 'admin') {
            throw {name: "unauthorized"}
        }
        next()
    } catch (err) {
        console.log(err);
        next(err)
    }
}

module.exports = adminAuthorization