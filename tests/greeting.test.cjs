'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!', 'casual style');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.', 'formal style (Ada)');
assert.strictEqual(greet('Grace', { style: 'formal' }), 'Good day, Grace.', 'formal style (Grace)');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!', 'empty options default to casual');
assert.strictEqual(greet('Ada', { style: 'shouty' }), 'Hello, Ada!', 'unknown style falls back to casual');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!', 'null options do not throw');
assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!'], 'map index argument is ignored');
assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet'], 'export surface unchanged');
console.log('greeting: ok');
