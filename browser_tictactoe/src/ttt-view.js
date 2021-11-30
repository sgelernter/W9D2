class View {
  constructor(game, el) {}

  setupBoard() {
    let ul = document.createElement('ul');
    ul.className = 'board';
    let li = document.createElement('li');
    ul.append(li);
    document.body.appendChild(ul);
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
