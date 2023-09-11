const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

// luôn để mặc định ở dưới cùng
// router.get('/', courseController.index);
module.exports = router;
