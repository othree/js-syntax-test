var test = require('tape');

test('timing test', t => {
  t.plan(2);

  t.equal(typeof Date.now, 'function');
  var start = Date.now();

  t.throws(() => func(arg));

  setTimeout(function () {
    t.equal(Date.now() - start, 100);
  }, 100);
});
