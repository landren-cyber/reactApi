var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.render('index', {title: 'cart'});
    req.app.locals.orders.find().toArray(function(err, result){
        var orders = result;
        res.send(JSON.stringify(orders));
    })
});

module.exports = router;