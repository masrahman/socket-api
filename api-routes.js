let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var con = require('./userController');
router.route('/user')
    .post(con.new);

router.route('/user/:id')
    .get(con.get)
    .post(con.addsession);

router.route('/search')
    .post(con.getname);

module.exports = router;
