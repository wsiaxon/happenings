const { Router } = require('express');
const asyncWrapper = require('../middleware/asyncWrapper');
const { verifyToken, isAuthor } = require('../middleware/authentication');
const { createStory, getAllStories, getStoryById, getStatusCounts, getStoryForEditById, updateStory, deleteStory } = require('../controllers/story');
const { createStorySchema, getAllStoriesSchema, editStorySchema } = require('../validations/story.validators');
const validator = require('../middleware/validator');

const router = Router();

router.get(
  '/getStatusCounts',
  // validator(getAllStoriesSchema),
  asyncWrapper(getStatusCounts),
);

router.get(
  '/getAll',
  // validator(getAllStoriesSchema),
  asyncWrapper(getAllStories),
);

router.post(
  '/create',
  verifyToken,
  validator(createStorySchema),
  asyncWrapper(createStory),
);

router.get(
  '/getForEdit/:id',
  asyncWrapper(getStoryForEditById),
);

router.get(
  '/get/:id',
  asyncWrapper(getStoryById),
);

// router.get(
//   '/:slug',
//   asyncWrapper(getStoryBySlug),
// );

router.put(
  '/update/:id',
  verifyToken,
  // asyncWrapper(isAuthor),
  validator(editStorySchema),
  asyncWrapper(updateStory),
);

router.delete(
  '/delete/:id',
  verifyToken,
  asyncWrapper(deleteStory),
);

// router.put(
//   '/:slug',
//   verifyToken,
//   asyncWrapper(isAuthor),
//   validator(editStorySchema),
//   asyncWrapper(editStory),
// );

module.exports = router;
