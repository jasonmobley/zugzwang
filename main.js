export class App {
  constructor() {
  }

  init(props) {
    this._main = props.main ?? '.main';
    this._selectedColor = props.selectedColor ?? null;
    this._whiteColorButton = props.whiteColorButton ?? '#btn-color-white';
    this._blackColorButton = props.blackColorButton ?? '#btn-color-black';
    this._resetButton = props.resetButton ?? '#btn-reset';

    if (this._resetButton) {
      this.el(this._resetButton).addEventListener('click', () => { this.setColor(null); });
    }

    if (this._whiteColorButton) {
      this.el(this._whiteColorButton).addEventListener('click', () => { this.setColor('white'); });
    }
    if (this._blackColorButton) {
      this.el(this._blackColorButton).addEventListener('click', () => { this.setColor('black'); });
    }
  }

  get selectedColor() {
    return this._selectedColor;
  }

  get whiteColorButton() {
    return this._whiteColorButton;
  }

  get blackColorButton() {
    return this._blackColorButton;
  }

  el(selector) {
    return document.querySelector(selector);
  }

  setColor(color) {
    if (this._selectedColor === 'white' || this._selectedColor === 'black') {
      this.el(this._main).classList.remove(this._selectedColor);
    }
    if (color === 'white' || color === 'black') {
      this._selectedColor = color;
      this.el(this._main).classList.add(this._selectedColor);
    } else {
      this._selectedColor = null;
    }
  }
}
