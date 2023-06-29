export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

<<<<<<< HEAD
=======
  set name(name) {
    this._name = name;
  }

>>>>>>> 3b8a3043ff1bd4a9236cae6117a55932f49c7a1a
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
