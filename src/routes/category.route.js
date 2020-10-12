const { Router } = require('express');
const { getAllCategories } = require('../controllers/category');
const asyncWrapper = require('../middleware/asyncWrapper');
const { verifyToken, isAdmin } = require('../middleware/authentication');

const router = Router();

router.get(
  '/categories',
  verifyToken,
  isAdmin,
  asyncWrapper(getAllCategories),
);

module.exports = router;
