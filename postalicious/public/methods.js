// const pgp = require('pg-promise')()
// const db = pgp({thing: 'sandbox'})

// const buildRequest = (data) => {
//   let something = data
//   // console.log(data);
//   return db.any(something)
// }

//search uriencoded
//use new header
//search fetch
//construct url

function construct(event) {
  event.preventDefault()
  const method = document.getElementsByClassName("method-input")[0].value
  const host = document.getElementsByClassName("host-input")[0].value
  const queryParamArray = []
  const docKeyLength = document.getElementsByClassName("key").length
  const headersArray = []
  const docValLength = document.getElementsByClassName("value").length
  for (var i = 0; i < docKeyLength; i++) {
    queryParamArray.push(document.getElementsByClassName("key")[i].value)
  }
  for (var i = 0; i < docValLength; i++) {
    headersArray.push(document.getElementsByClassName("value")[i].value)
  }
  console.log(method);
  document.getElementById("request_content").innerText = method + ' ' + host
  document.getElementById("request_content2").innerText = queryParamArray
  document.getElementById("request_content3").innerText = headersArray
}

// module.exports = { buildRequest, construct }
