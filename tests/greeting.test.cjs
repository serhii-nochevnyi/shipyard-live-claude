'use strict';

const test = require('node:test');
const assert = require('assert');
const greeting = require('../src/greeting.cjs');
const { greet } = greeting;

test('casual style is the default', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('casual style can be selected explicitly', () => {
  assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
});

test('formal style returns the formal greeting', () => {
  assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
});

test('missing or empty options fall back to casual without throwing', () => {
  assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: undefined }), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', undefined), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
});

test('map passes stray arguments without changing output', () => {
  assert.deepStrictEqual(['Ada', 'Grace'].map(greet), ['Hello, Ada!', 'Hello, Grace!']);
});

test('unrecognized styles fall back to casual', () => {
  assert.strictEqual(greet('Ada', { style: 'shouty' }), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'Formal' }), 'Hello, Ada!');
  assert.strictEqual(greet('Ada', { style: 'toString' }), 'Hello, Ada!');
});

test('module exports only greet', () => {
  assert.deepStrictEqual(Object.keys(greeting), ['greet']);
});
