var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('trigger', {
        title: 'Trigger - Web Tracking & Automation',
        headline: 'Trigger'
    });
});

module.exports = router;