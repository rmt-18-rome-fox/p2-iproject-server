function errorHandler(err, req, res, next) {
    if(err.message === 'dateEnd cant be lower then dateStart') res.status(400).send({message: 'dateEnd cant be lower then dateStart'})
    if(err.message === 'Email must be inputed') res.status(400).send({message: 'Email must be inputed'})
    if(err.message === 'Password must be inputed') res.status(400).send({message: 'Password must be inputed'})
    if(err.errors[0].message === 'username must be unique') res.status(400).send({message: 'username must be unique'})
    if(err.errors[0].message === 'User.username cannot be null') res.status(400).send({message: 'username cannot be empty'})
    if(err.errors[0].message === 'User.email cannot be null') res.status(400).send({message: 'email cannot be empty'}) 
    if(err.errors[0].message === 'User.password cannot be null') res.status(400).send({message: 'password cannot be empty'})
    if(err.errors[0].message === 'User.phoneNumber cannot be null') res.status(400).send({message: 'phoneNumber cannot be empty'}) 
    if(err.errors[0].message === 'Validation notEmpty on username failed') res.status(400).send({message: 'username cannot be empty'})
    if(err.errors[0].message === 'Validation notEmpty on email failed') res.status(400).send({message: 'email cannot be empty'})
    if(err.errors[0].message === 'Validation notEmpty on password failed') res.status(400).send({message: 'password cannot be empty'})
    if(err.errors[0].message === 'Validation notEmpty on phoneNumber failed') res.status(400).send({message: 'username cannot be empty'})
}

module.exports = errorHandler