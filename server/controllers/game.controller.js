const Game = require("../models/game.model");

module.exports = {

    findAllGames: (req, res) =>{
        Game.find()
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=>{
                console.log("Find All Games failed"),
                res.json({message: "Something went wrong in findAll", error: err})
            })
        },
    createNewGame: (req, res)=>{
        Game.create(req.body)
            .then((newGame)=>{
                console.log(newGame);
                res.json(newGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in Create New Game");
                //200=Good request 400=calling right place, but failing validation, 
                //404=not calling the right place or bad server setup
                res.status(400).json(err);
            })
        },
    findOneGame: (req, res) =>{
        Game.findOne({_id: req.params.id})
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in findOneGame", error:err})
            })
        },
    deleteGame: (req,res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame),
                res.json(deletedGame)
            })
            .catch((err)=>{
                console.log("Delete One Game failed"),
                res.json({message: "Something went wrong with deleteGame", error: err})
            })
    updateGame: (req, res)=>{
        Game.findOneAndUpdate({_id: params.req.id})
            req.body,
            {new:true, newValidators: true}
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in updateGame", error:err})
            })
            };                                                     
    }
    }