const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
	    Product.find((err, docs)=>{
            // const productChunks = [];
            // const chunkSize = 3;
            // for (var i = 0; i < docs.length; i += chunkSize) {
            //     productChunks.push(docs.slice(i, i + chunkSize));
            // }
        res.render('shop/index', { title: 'Shopping Cart', products });
    });
	
});

module.exports = router;

