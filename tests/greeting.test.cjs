'use strict';

const assert = require('assert');
const { test } = require('node:test');
const { greet } = require('../src/greeting.cjs');

test('casual is the default style', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('formal style', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
});

test('non-object options keep casual output', () => {
  for (const options of [undefined, null, {}, 0, 'formal']) {
    assert.strictEqual(greet('Ada', options), 'Hello, Ada!');
  }
  assert.deepStrictEqual(['Ada', 'Bo'].map(greet), ['Hello, Ada!', 'Hello, Bo!']);
});

test('unrecognised style falls back to casual', () => {
  assert.strictEqual(greet('Ada', { style: 'shouty' }), 'Hello, Ada!');
});

test('exports only greet', () => {
  assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
});
