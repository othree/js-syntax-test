// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Mix-ins

var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
