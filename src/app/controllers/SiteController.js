class SiteController {
    //function contructor

    //[GET] / (home)
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// exports cái gì thì khi require nhận được cái đó
// const newController = require('./NewsController')
