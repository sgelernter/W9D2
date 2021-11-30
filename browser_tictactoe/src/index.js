const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

window.View = View; 
window.Game = Game; 


document.addEventListener("DOMContentLoaded", () => {
  const fig = document.querySelector(".ttt");
  const game = new Game();
  new View(game);
});
