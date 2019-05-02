const WIDTH = 7
const HEIGHT = 6
const WIN_COUNT = 4

const LETTER_2_INDEX = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6
}

const PLAYER_2_INDEX = {
  'Red': 1,
  'Yellow': 2
}

const generateEmptyBoard = () =>
  Array.from({length: WIDTH}, () => Array.from({length: HEIGHT}, () => 0))

function moves2board(moves) {
  return moves
    .map(move => {
      const [letter, player] = move.split('_')
      return {index: LETTER_2_INDEX[letter], player: PLAYER_2_INDEX[player]}
    })
    .sort((m1, m2) => m1.index - m2.index)
    .reduce((out, e) => {
      out[e.index] = [...out[e.index].slice(1), e.player]
      return out
    }, generateEmptyBoard())
    .flat()
}

function getWinner(board) {
  const verticals = board.reduce((out, e, i) => {
    out[Math.floor(i / HEIGHT)] = (out[Math.floor(i / HEIGHT)] || []).concat(e)
    return out
  }, [])

  const horizontals = board.reduce((out, e, i) => {
    out[i % HEIGHT] = (out[i % HEIGHT] || []).concat(e)
    return out
  }, [])

  const diagonalUp = Array.from({length: WIDTH * HEIGHT}, (_, i) => i)
    .map(start => {
      const indexes = [start]
      while(start + HEIGHT - 1 >= (Math.floor(start / HEIGHT) + 1) * HEIGHT && start + HEIGHT - 1 < HEIGHT * WIDTH) {
        start += HEIGHT - 1
        indexes.push(start)
      }
      return indexes.map(e => board[e])
    })

  const diagonalDown = Array.from({length: WIDTH * HEIGHT}, (_, i) => i)
    .map(start => {
      const indexes = [start]
      while(start + HEIGHT + 1 < (Math.floor(start / HEIGHT) + 2) * HEIGHT && start + HEIGHT + 1 < HEIGHT * WIDTH) {
        start += HEIGHT + 1
        indexes.push(start)
      }
      return indexes.map(e => board[e])
    })

  return [
    ...verticals,
    ...horizontals,
    ...diagonalUp,
    ...diagonalDown,
  ].reduce((out, e) => out !== 0 ? out : getLineWinner(e), 0)
}

function getLineWinner(line) {
  return line.reduce(({winner, count, last}, e) => {
    const currentWinner =
        e === last && count + 1 == WIN_COUNT ? last : 0
    const countByLast =
      e === last ? count + 1 : 1
    return {
      count: count + 1 >= WIN_COUNT ? WIN_COUNT : countByLast,
      winner: count + 1 > WIN_COUNT ? winner : currentWinner,
      last: e
    }
  }, {winner: 0, count: 0}).winner
}

module.exports = {
  getWinner,
  getLineWinner,
  moves2board
}
