'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
assert.deepStrictEqual(['Ada', 'Bo'].map(greet), ['Hello, Ada!', 'Hello, Bo!']);
assert.strictEqual(greet('Ada', { style: 'banana' }), 'Hello, Ada!');
assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
console.log('greeting: ok');
