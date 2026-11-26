'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!', 'casual style');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.', 'formal style');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!', 'empty options');
assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!', 'undefined options');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!', 'null options');
assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!'], 'map callers');
assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet'], 'export shape');
console.log('greeting: ok');
