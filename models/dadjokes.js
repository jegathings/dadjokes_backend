const { Schema, model } = require('mongoose');

const dadJokeSchema = Schema({
    joke: {type: String, required: true, distinct: true}
});

const DadJoke = model('dadjoke', dadJokeSchema);

module.exports = DadJoke;