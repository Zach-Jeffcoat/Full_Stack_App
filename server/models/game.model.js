const mongoose = require("mongoose")

//Create model and schema to shape.structure document with specific collection in db. 
//Schema defines document structure as well as validators and defaults.
const GameSchema = new mongoose.Schema({
    //_id automatically created when document added
    name: {
            type: String,
            required: [true, "Games have names, dude."],
            minlength: [3, "Name length's gotta be at least three characters!"]
    },
    yearReleased: {
        type: Number,
        required: [true, "It HAD to have come out sometime!"],
        min: [1950, "First game was released after ther computer in 1986..."]
    },
    genre: {
        type: String,
        required: [true, "C'mon. Pick a genre."],
        enum: [
            "action",
            "puzzle",
            "platformer",
            "survival",
            "rpg",
            "fps",
            "rts",
            "mmo",
            "puzzle",
            "sports",
            "adventure",
            "children's"
        ]
    },
    image:{
        type:String,
        required: [true, "They released SOME box art!"]
    },

    rating:{
        type: String,
        enum: [
            "T",
            "E",
            "M",
            "AO",
            "E10",
            "Y",
            "None"
        ]
    },

    company:{
        type: String
    }


}, {timestamps: true})
//this makes  createdAt and updatedAts

//Model makes collection name singular

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;