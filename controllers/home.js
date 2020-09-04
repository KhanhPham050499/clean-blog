const BlogPost = require('../models/BlogPost')
module.exports = (req, res) => {
    // res.sendFile(path.resolve(__dirname, './pages/index.html'))
    BlogPost.find({}, function (error, posts) {
        // console.log(posts);
        console.log(req.session)
        res.render('index', {
            blogposts: posts
        })
    })
}