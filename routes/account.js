var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('account', {
        title: 'Account - Web Tracking & Automation',
        headline: 'Account'
    });
});

module.exports = router;