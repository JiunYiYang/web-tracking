var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('dashboard', {
        title: 'Dashboard - Web Tracking & Automation',
        headline: 'Dashboard'
    });
});

module.exports = router;