const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router.route('/login')
.post(usersController.login);

router.route('/signup')
.post(usersController.signUp);
// router.route('auth/google/callback');

// router.route('/validate').post(usersController.validateToken);
// router.route('/signup').post(usersController.signup);

module.exports = router;