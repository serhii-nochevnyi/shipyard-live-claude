'use strict';

const assert = require('assert');
const greeting = require('../src/greeting.cjs');
const { greet } = greeting;

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!', 'casual style');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.', 'formal style');
assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!', 'undefined options');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!', 'null options');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!', 'options without style');
assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!'], 'map passes index as options');
assert.strictEqual(greet('Ada', { style: 'Formal' }), 'Hello, Ada!', 'differently cased style falls back');
assert.strictEqual(greet('Ada', { style: 'shouty' }), 'Hello, Ada!', 'unknown style falls back');
assert.strictEqual(greet('Ada', { style: 'constructor' }), 'Hello, Ada!', 'inherited property name falls back');
assert.deepStrictEqual(Object.keys(greeting), ['greet'], 'public surface');
console.log('greeting: ok');
