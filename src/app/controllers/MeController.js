// const mongoose = require('mongoose');

const Courses = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../ulti/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        (async () => {
            await Courses.find()
                .then((courses) => {
                    res.render('me/stored-courses', {
                        courses: mutipleMongooseToObject(courses),
                    });
                })
                .catch(next);
        })();
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        (async () => {
            await Courses.findWithDeleted({ deleted: true })
                .then((courses) => {
                    res.render('me/trash-courses', {
                        courses: mutipleMongooseToObject(courses),
                    });
                })
                .catch(next);
        })();
    }
}

//findDeleted lấy ra các khoá học đã bị xoá
//findWithDeleted{ deleted: true } in ra các khoá học có deleted: true thôi

// nếu dữ liệu nào có deletedAt: null hoặc k có deletedAt thì mới in ra trang web

module.exports = new MeController();
