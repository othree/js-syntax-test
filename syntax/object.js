const CONSTANT = 'CONSTANT';

const obj = {

  CONSTAN(a) {
    return a * 3;
  },

  [ CONSTANT ](a) {
    return a * 3;
  },

  [ 'a' ]: function () {
    return 42;
  }

};
