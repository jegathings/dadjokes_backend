const express = require('express');
const router = express.Router();
const DadJoke = require('../models/dadjokes.js');


router.post('/', async (req, res)=>{
    try {
        const createDadJoke = await DadJoke.create(req.body);
        res.status(200).json(createDadJoke);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.get('/', async (req, res)=>{
    try {
        const dadJokes = await DadJoke.find({});
        res.status(200).json(dadJokes);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', async (req, res)=>{
    try {
        const deletedDadJoke = await DadJoke.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDadJoke);
    } catch(errror) {
        res.status(400).json(error);
    }
});



module.exports = router;