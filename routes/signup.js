var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('signup', {
        title: 'SignUp - Web Tracking & Automation',
        headline: 'SignUp'
    });
});

module.exports = router;