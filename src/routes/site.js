const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

// luôn để mặc định ở dưới cùng
router.get('/', siteController.index); /* = app.get('/', (req, res) => {
                                                res.render('home');
                                            });*/

module.exports = router;
