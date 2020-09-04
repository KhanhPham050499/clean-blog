const User = require('../models/User.js')

module.exports = (req, res) => {
    console.log(req.body)
    User.create(req.body, (error, user) => {
        console.log(error);
        if (error) {
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}