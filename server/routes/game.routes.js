const mongoose = require("mongoose");
const GameController = require("../controllers/game.controller")

module.exports = (app) =>{
    app.get("/api/gamesDB", GameController.findAllGames);
    app.post("/api/gamesDB", GameController.createNewGame);
    app.get("/api/games/:id", GameController.findOneGame);
    app.delete("/api/games/:id", GameController.deleteGame);
    app.put("api/games/:id", GameController.updateGame);
}