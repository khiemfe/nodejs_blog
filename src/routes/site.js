const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/search', siteController.search)

// luôn để mặc định ở dưới cùng 
router.use('/', siteController.index) /* = app.get('/', (req, res) => {
                                                res.render('home');
                                            });*/

module.exports = router 