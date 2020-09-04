const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/test_database', {useNewUrlParser: true});

// BlogPost.create({
//     title: ' daay la sach lap trinh',
//     body: 'Se huong dan het tat ca nodejs'
// }, (error, blogpost) =>  {
//     console.log(error, blogpost);
// })

var id = '5f5117b8bd074f2f2bc07f84'
BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost);
})