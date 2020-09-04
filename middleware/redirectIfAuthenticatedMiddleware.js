module.exports = (req,res, next) => {
    if(req.session.userId){
        return res.redirect('/') // neu dang nhap se ra trang chu
    }
    next();
}