const BlogPost = require('../models/BlogPost.js');
const path = require('path');
module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '../public/upload', image.name), function (err) {
        // console.log(req.body); lay du lieu tren web khi nhap vao
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name
        }, function (err) {
            res.redirect('/')

        })
    })
}