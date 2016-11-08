var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Teste para a BrasilByByss'});
});

router.get('/busca', function (req, res, next) {
    var url = 'http://staging.api.brasilbybus.com/active-stops'

    request({
            headers: {
                'X-Api-Key': 'a58060e1b1354210961d49fe738101f7'
            },
            uri: url,
            method: 'GET'
        },
        function (e, r, body) {
            if (e) throw e;

            var b = JSON.parse(body);
            res.json(b);
        });
});


module.exports = router;
