/** Tests for Unix Crypt **/
let assert = require('assert');
let mod = require('../src/unix-crypt-td.js');

describe('unixCryptTD', function() {
  it('should equal output of crypt(3)', function() {
    assert.equal(mod.unixCryptTD('foo', 'ba'), 'ba4TuD1iozTxw');
    assert.equal(mod.unixCryptTD('random long string', 'hi'), 'hib8W/d4WOlU.');
    assert.equal(mod.unixCryptTD('foob', 'ar'), 'arlEKn0OzVJn.');
    assert.equal(mod.unixCryptTD('Hello World! This is Unix crypt(3)!', 'ux'),
    	    'uxNS5oJDUz4Sc');
  });
});
