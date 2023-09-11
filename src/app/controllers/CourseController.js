// const mongoose = require('mongoose');

const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../ulti/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        (async () => {
            //findOne({ slug: req.params.slug }): không cần lệnh { slug: req.params.slug }
            await Course.findOne()
                .then((course) => {
                    // res.json(course)
                    res.render('courses/show', {
                        course: mongooseToObject(course),
                    });
                })
                .catch(next);
        })();

        // res.send('Course detail - ' + req.params.slug);
    }

    // [GET] /courses/create
    create(req, res, next) {
        (async () => {
            await Course.findOne({ slug: req.params.slug })
                .then(() => {
                    res.render('courses/create');
                })
                .catch(next);
        })();
    }

    // [POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        (async () => {
            req.body.image = `	https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg`;
            const course = new Course(req.body);
            await course
                .save()
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        })();
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        (async () => {
            await Course.findById(req.params.id)
                .then((course) => {
                    res.render('courses/edit', {
                        course: mongooseToObject(course),
                    });
                })
                .catch(next);
        })();
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        // res.json(req.body)
        (async () => {
            await Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => {
                    res.redirect('/me/stored/courses'); // khi submit thì nó chuyển về trang có slug là /me/stored/courses
                })
                .catch(next);
        })();
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        // Xoá cứng (Xoá là mất luôn)
        // (async () => {
        //     await Course.deleteOne({_id: req.params.id})
        //         .then(() => {
        //             res.redirect('back') //trở lại trang vừa rồi
        //         })
        //         .catch(next)
        // })()

        //Xoá mềm (xoá vẫn còn trong database)
        (async () => {
            await Course.delete({ _id: req.params.id })
                .then(() => {
                    res.redirect('back'); //trở lại trang vừa rồi
                })
                .catch(next);
        })();
    }

    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        (async () => {
            await Course.deleteOne({ _id: req.params.id })
                .then(() => {
                    res.redirect('back'); //trở lại trang vừa rồi
                })
                .catch(next);
        })();
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        (async () => {
            await Course.restore({ _id: req.params.id })
                .then(() => {
                    res.redirect('back'); //trở lại trang vừa rồi
                })
                .catch(next);
        })();
    }
}

//await Course.updateOne({_id: req.params.id}, req.body) 2 cái muốnc chỉnh sửa

// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
// GET: Gửi yêu cầu lên Server, yêu cầu Server trả lại dữ liệu cho Client
// POST: Gửi yêu cầu lên Server, yêu cầu Server tạo mới dữ liệu
// PUT, PATCH: Chỉnh sửa dữ liệu

module.exports = new CourseController();
