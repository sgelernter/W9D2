class View {
  constructor(game, el) {
    document.body.appendChild(this.setupBoard());
    this.game = game;
    const clickHandle = this.handleClick.bind(this);
    this.bindEvents(clickHandle);
  }

  setupBoard() {
    let ul = document.createElement('ul');
    ul.className = 'board';
    
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li');
      li.id = i;
      li.className = 'unclicked';
      ul.append(li);
    }

    return ul;
  }

  bindEvents(cb) {
    const grid = document.querySelector("ul");
    grid.addEventListener("click", cb);
  }

  handleClick(e) {
    const POSITIONS = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];
    let pos = POSITIONS[e.target.id];
    this.game.playMove(pos);
    this.makeMove(e.target);
  }

  makeMove(square) {
    // if something unclicked gets clicked add "clicked-X/O" class 
    // depending on game.currentPlayer
    // let currentSymbol = this.game.currentPlayer
    if (square.className === 'unclicked') {
      if (this.game.currentPlayer === 'x') {
        square.className = 'clicked-x';
      } else {
        square.className = 'clicked-o';
      }
    }
  }

}

module.exports = View;
