const express = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('this is homepage')
    res.send('welcome to homepage')
})


module.exports= router;