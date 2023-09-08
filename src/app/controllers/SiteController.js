const mongoose = require('mongoose');

const Course = require('../models/Course');

class SiteController {
    //function contructor

    //[GET] / (home)
    index(req, res) {
        // Callback

        // Old (Cũ)
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses)
        //     res.status(400).json({ error: 'ERROR!!!' })
        // })

        (async () => {
            const courses = await Course.find();
            if (courses.error) res.status(400).json({ error: 'ERROR!!!' });
            else res.json(courses);
        })();

        //or try/catch
        // try {
        //     res.json(await Course.find())
        // } catch (error) {
        //     res.status(400).json({ error: 'ERROR!!!' })
        // }

        // or Promise
        // (async () => {
        //     await Course.find()
        //     .then((courses) => {
        //         return res.json(courses)
        //     })
        //     .catch(() => {
        //         return res.starus(400).json({ error: 'ERROR!'})
        //     })
        // })()

        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// exports cái gì thì khi require nhận được cái đó
// const newController = require('./NewsController')
