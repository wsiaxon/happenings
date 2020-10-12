const { Router } = require('express');
const roleRoute = require('./role.route');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const commentRoute = require('./comment.route');
const tagRoute = require('./tag.route');
const authRoute = require('./auth.route');
const storyRoute = require('./story.route');

const router = Router();

router.use('/roles', roleRoute);
router.use('/users', userRoute);
router.use('/categories', categoryRoute);
router.use('/comments', commentRoute);
router.use('/tags', tagRoute);
router.use('/auth', authRoute);
router.use('/stories', storyRoute);

module.exports = router;
