export default class KeyBoard {
  constructor(buttons) {
    this.buttons = buttons;
    this.setKeys = [];
  }

  createKeyBoard() {
    this.KeyBoard = document.createElement('div');
    this.KeyBoard.className = 'wrapper-keyboard';
    document.body.append(this.KeyBoard);
    return this;
  }

  createRowsKeys() {
    for (let row = 1; row <= 5; row++) {
      this.row = document.createElement('div');
      this.row.className = 'row';
      this.buttons.forEach((element) => {
        if (element.row === row) {
          this.key = document.createElement('button');
          this.key.className = element.style;
          this.key.innerText = element.content.en; // REMOVE AFTER
          this.key.symbol = element.symbol;
          this.key.content = element.content;
          this.key.altContent = element.altContent;
          this.key.code = element.code;
          this.key.row = element.row;
          this.setKeys.push(this.key);
          this.row.append(this.key);
        }
        this.KeyBoard.append(this.row);
      });
    }
    return this;
  }
}

//     console.log(this.keyBoard) // REMOVE
//     return this;
// }

// createKey () {
//     this.buttons.forEach(key => {
//         if(key.row === this.keyBoard.row.)
//     });
// }
// render (parent) {
//     parent.append(this.keyBoard);
//     return this;
// }

// createWrapperKeyBoard () {
//     this.wrapperKeyboard = document.createElement('div');
//     this.wrapperKeyboard.className = 'wrapper-keyboard';
//     return this.wrapperKeyboard;
// }

// createKey () {

// }

// createKeyBoard () {
//     const rows = [];
//     for (let x = 0; x < 5; x++) {
//         rows.push(this.row)
//     }
//     // console.log(rows)
//     // this.wrapperKeyboard.append(...rows)
//     // console.log(this.wrapperKeyboard)
//     document.body.append(this.wrapperKeyboard);

// renderKeyBoard () {

// }
