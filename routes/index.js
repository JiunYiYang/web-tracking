var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'WT - 全中文化網頁追蹤服務',
        headline: '自己的網站數據自己管',
        paragraph: '中文化輕量網站追蹤服務，輕鬆打造自家sales funnel'
    });
});

module.exports = router;