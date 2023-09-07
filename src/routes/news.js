const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewController')
// newsController.index
console.log(newsController.index)

router.use('/:slug', newsController.show)

// luôn để mặc định ở dưới cùng 
router.use('/', newsController.index) /* = app.get('/', (req, res) => {
                                                res.render('home');
                                            });*/

module.exports = router 