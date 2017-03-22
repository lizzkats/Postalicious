const pgp = require('pg-promise')()
const db = pgp({thing: 'sandbox'})


const buildRequest = (data) => {
  let something = data
  // console.log(data);
  return db.any(something)
}

module.exports = { buildRequest }
