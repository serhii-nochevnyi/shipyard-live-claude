'use strict';

const assert = require('assert');
const { test } = require('node:test');
const { greet } = require('../src/greeting.cjs');

test('default style is casual', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: undefined }), 'Hello, Ada!');
});

test('casual style returns the casual greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('formal style returns the formal greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
  assert.strictEqual(greet('Bob', { style: 'formal' }), 'Good day, Bob.');
});

test('existing call shapes keep the casual output', () => {
  assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
  assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!']);
  assert.strictEqual(greet('Ada', { style: 'Formal' }), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'constructor' }), 'Hello, Ada!');
});
