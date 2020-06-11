const { Schema, model } = require('mongoose');

const dadJokeSchema = Schema({
    joke: {type: String, required: true, unique: true}
});
dadJokeSchema.index( {'joke' : 1 }, {unique : true });

const DadJoke = model('dadjoke', dadJokeSchema);

module.exports = DadJoke;