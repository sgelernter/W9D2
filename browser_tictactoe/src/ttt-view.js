class View {
  constructor(game, el) {
    document.body.appendChild(this.setupBoard());
    this.game = game;
    this.bindEvents();
  }

  setupBoard() {
    let ul = document.createElement('ul');
    ul.className = 'board';
    
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li');
      li.id = i;
      ul.append(li);
    }

    return ul;
  }

  bindEvents() {
    const grid = document.querySelector("ul");
    grid.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    const POSITIONS = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];
    let pos = POSITIONS[e.target.id];
    debugger
    this.game.playMove(pos);
    this.makeMove(e.target);
  }

  makeMove(square) {
    // if something unclicked gets clicked add "clicked-X/O" class 
    // depending on game.currentPlayer
  }

}

module.exports = View;
