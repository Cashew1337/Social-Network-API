const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addThought,
    removeThought,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend)

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').post(addThought).delete(removeThought);

module.exports = router;