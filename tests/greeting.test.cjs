'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: undefined }), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!', 'casual style');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.', 'formal style');
assert.strictEqual(greet('Grace', { style: 'formal' }), 'Good day, Grace.');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
assert.strictEqual(greet('Ada', 'formal'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', 42), 'Hello, Ada!');
assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!']);
assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
console.log('greeting: ok');
