var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('login', {
        title: 'Login - Web Tracking & Automation',
        headline: 'Login'
    });
});

module.exports = router;