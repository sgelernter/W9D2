class View {
  constructor(game, el) {
    document.body.appendChild(this.setupBoard());
  }

  setupBoard() {
    let ul = document.createElement('ul');
    ul.className = 'board';
    
    for (let i = 1; i <= 9; i++) {
      let li = document.createElement('li');
      li.id = `box ${i}`;
      ul.append(li);
    }

    return ul;
  }
  

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
