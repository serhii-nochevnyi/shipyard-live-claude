'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/greeting.cjs');

test('default call keeps the current greeting', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('casual style returns the current greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('formal style returns the formal greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
});

test('options without a style keep the casual greeting', () => {
  assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: undefined }), 'Hello, Ada!');
});

test('non-object second argument keeps the current greeting', () => {
  assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
  assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!']);
});

test('module exports only greet', () => {
  assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
});
