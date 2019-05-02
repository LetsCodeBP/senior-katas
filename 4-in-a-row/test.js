'use stirct'

const test = require('tape')
const game = require('./kata')

test(t => {
  t.deepEqual(game.moves2board(
    [
      'A_Red',
      'B_Yellow',
      'A_Red',
      'B_Yellow',
      'A_Red',
      'B_Yellow',
      'G_Red',
      'B_Yellow'
    ]),
    [
      0, 0, 0, 1, 1, 1,
      0, 0, 2, 2, 2, 2,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1
    ]
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getWinner(
    [
      0, 0, 0, 1, 1, 1,
      0, 0, 2, 2, 2, 2,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1
    ]),
    2
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getWinner(
    [
      0, 0, 0, 1, 1, 1,
      0, 0, 2, 0, 2, 2,
      0, 0, 0, 0, 0, 2,
      0, 0, 0, 0, 0, 2,
      0, 0, 0, 0, 0, 2,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1
    ]),
    2
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getWinner(
    [
      2, 0, 0, 1, 1, 1,
      2, 0, 2, 0, 2, 2,
      0, 2, 0, 0, 2, 0,
      0, 0, 2, 2, 0, 2,
      0, 0, 2, 0, 0, 2,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1
    ]),
    2
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getWinner(
    [
      2, 0, 0, 1, 1, 1,
      2, 0, 2, 0, 2, 2,
      0, 2, 0, 0, 2, 0,
      0, 0, 2, 2, 0, 2,
      0, 0, 0, 2, 0, 2,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1
    ]),
    2
  )
  t.end()
})



test(t => {
  t.deepEqual(game.getLineWinner(
    [
      0, 0, 2, 2, 2, 2
    ]),
    2
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getLineWinner(
    [
      0, 2, 2, 2, 2, 1
    ]),
    2
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getLineWinner(
    [
      2, 2, 0, 2, 2, 2
    ]),
    0
  )
  t.end()
})

test(t => {
  t.deepEqual(game.getLineWinner(
    [
      1, 2, 2, 2, 2, 0, 1
    ]),
    2
  )
  t.end()
})



