const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');
// newsController.index
console.log(newsController.index);

router.get('/:slug', newsController.show);

// luôn để mặc định ở dưới cùng
router.get('/', newsController.index); /* = app.get('/', (req, res) => {
                                                res.render('home');
                                            });*/

module.exports = router;
