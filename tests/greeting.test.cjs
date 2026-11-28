'use strict';

const assert = require('assert');
const { test } = require('node:test');
const { greet } = require('../src/greeting.cjs');

test('default style greets casually', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('casual style greets casually', () => {
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('formal style greets formally', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
});

test('absent style falls back to casual', () => {
  assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: undefined }), 'Hello, Ada!');
});

test('unknown style falls back to casual without throwing', () => {
  assert.strictEqual(greet('Ada', { style: 'shout' }), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'Formal' }), 'Hello, Ada!');
});

test('non-object options are ignored', () => {
  assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', 0), 'Hello, Ada!');
  assert.deepStrictEqual(['Ada', 'Bob'].map(greet), ['Hello, Ada!', 'Hello, Bob!']);
});

test('module exports only greet', () => {
  assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
});
