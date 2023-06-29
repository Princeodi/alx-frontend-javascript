export default class HolbertonCourse {
  constructor(name, length, students) {
<<<<<<< HEAD
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
=======
>>>>>>> ac063aa7d830088c59425259cec36c39f73a2a5d
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
    
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string.');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number.');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array.');
    }
  }
}
