const { Schema, model } = require('mongoose');

const dadJokeSchema = Schema({
    setup: {type: String, required: true, unique: true},
    punchline: {type: String, required: true, unique: true},
    rating: {type: String, required: true, default: "1"}
});
dadJokeSchema.index( {'setup' : 1, 'punchline': 1 }, {unique : true });

const DadJoke = model('dadjoke', dadJokeSchema);

module.exports = DadJoke;