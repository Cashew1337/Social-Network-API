const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addThought,
    removeThought,
    addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/friends').put(addFriend)

// /api/users/:userId/Thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;