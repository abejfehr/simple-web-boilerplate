import test from 'ava';

import SomeClass from '../src/SomeClass';

test('my passing test', t => {
  const has = new SomeClass();
  t.is(has.aThing, 'exists');
});
