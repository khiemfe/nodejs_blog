class NewsController {
    //function contructor

    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug (detail)
                    show(req, res) {
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new NewsController();

// exports cái gì thì khi require nhận được cái đó
// const newController = require('./NewsController')
