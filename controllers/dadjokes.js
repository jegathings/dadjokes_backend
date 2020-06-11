const express = require('express');
const router = express.Router();
const DadJoke = require('../models/dadjokes.js');


router.post('/create', async (req, res)=>{
    try {
        const createDadJoke = await DadJoke.create(req.body);
        res.status(200).json(createDadJoke);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.get('/index', async (req, res)=>{
    try {
        const dadJokes = await DadJoke.find({});
        res.status(200).json(dadJokes);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.delete('/delete/:id', async (req, res)=>{
    try {
        const deletedDadJoke = await DadJoke.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDadJoke);
    } catch(errror) {
        res.status(400).json(error);
    }
});

router.put('/update/:id', async (req, res)=>{
    try {
        const updatedDadJoke = await DadJoke.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updatedDadJoke); 
    } catch(error) {
        res.status(400).json(error);
    }
});

module.exports = router;