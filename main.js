class App {
  constructor() {
  }

  init(props) {
    this._main = props.main;
    this._resetButton = props.resetButton ?? null;
    this._selectedColor = props.selectedColor ?? null;
    this._whiteColorButton = props.whiteColorButton ?? null;
    this._blackColorButton = props.blackColorButton ?? null;

    if (this._resetButton) {
      this._resetButton.addEventListener('click', () => { this.setColor(null); });
    }

    if (this._whiteColorButton) {
      this._whiteColorButton.addEventListener('click', () => { this.setColor('white'); });
    }
    if (this._blackColorButton) {
      this._blackColorButton.addEventListener('click', () => { this.setColor('black'); });
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

  setColor(color) {
    if (this._selectedColor === 'white' || this._selectedColor === 'black') {
      this._main.classList.remove(this._selectedColor);
    }
    if (color === 'white' || color === 'black') {
      this._selectedColor = color;
      this._main.classList.add(this._selectedColor);
    } else {
      this._selectedColor = null;
    }
  }
}

export App;
