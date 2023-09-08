//nạp vào
const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/news', (req, res) => {
    //     console.log(req.query)
    //     res.render('news');
    // }); ==
    app.use('/news', newRouter);

    // app.get('/search', (req, res) => {
    //     // console.log(req.query) //get là query parameters nên là req.query
    //     res.render('search');
    // }); ==

    // app.post('/search', (req, res) => {
    //     console.log(req.body) //post là form data nên là req.body
    //     res.send('');
    // });

    //route
    // app.get('/trangchu', (req, res) => {
    //     res.send('Trang Chủ')
    // })

    // app.get('/', (req, res) => {
    //     res.render('home');
    // }); ==
    app.use('/', siteRouter);
}

module.exports = route;
