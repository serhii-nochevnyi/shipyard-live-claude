'use strict';

const { test } = require('node:test');
const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

test('greet(name) keeps the casual output', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('style casual returns the casual greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('style formal returns the formal greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
});

test('calls that were valid before the option keep the casual output', () => {
  assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'bogus' }), 'Hello, Ada!');
});

test('the module still exports only greet', () => {
  assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet']);
});
