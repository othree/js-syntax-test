var test = require('tape');

test('timing test', t => {
  const start = {};

  t.throws(() => func(arg));

  t.plan(2);

  t.equal(typeof Date.now, 'function');

  setTimeout(function () {
    t.equal(Date.now() - start, 100);
  }, 100);
});
