var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('setting', {
        title: 'Setting - Web Tracking & Automation',
        headline: 'Setting'
    });
});

module.exports = router;