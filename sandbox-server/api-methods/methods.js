const pgp = require('pg-promise')
const db = pgp('sandBox')

const arr = ['doodads']

const finder = (str) => {
  console.log('herere')
  console.log(str)
}

module.exports = { finder }
