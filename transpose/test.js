'use strict'

const test = require('tape')
const transpose = require('./kata')

test(t => {
  t.deepEquals(transpose([]), [])
  t.deepEquals(transpose([[1]]), [[1]])
  t.deepEquals(transpose([[1, 2], [3, 4], [5, 6]]), [[1, 3, 5], [2, 4, 6]])
  t.deepEquals(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]])
  t.end()
})
