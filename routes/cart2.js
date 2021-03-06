var express = require('express');
var router = express.Router();
var jsonParser = express.json();

router.post('/', jsonParser, function(req, res, next){
    let orderName = req.body.orderName;
    let orderPrice = +req.body.orderPrice;
    let orderWeight = +req.body.orderWeight;
    let newOrder = {name: orderName, price: orderPrice, weight: orderWeight};
    console.log(newOrder);
    req.app.locals.orders.insertOne(newOrder);
    res.redirect('/cart');
})


module.exports = router;