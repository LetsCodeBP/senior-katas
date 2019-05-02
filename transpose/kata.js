'use strict'

module.exports = m => {
  return (m[0] || []).map((_, i) =>
    m.flatMap(e => e[i])
  )
}

