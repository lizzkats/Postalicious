//search uriencoded
//use new header
//search fetch
//construct url
const protocol = 'http/1.1'
const method = document.getElementsByClassName("method-input")[0].value
const docKeyLength = document.getElementsByClassName("key").length
const docValLength = document.getElementsByClassName("value").length
const headerOptions = document.getElementsByClassName('daheaders')
const headerValue = document.getElementsByClassName('select')

const headers = new Headers()

function construct(event) {
  const host = document.getElementsByClassName("host-input")[0].value
  const keyHeader1 = document.getElementById('header-key1').value
  const valueHeader1 = document.getElementById('header-value1').value
  // headers.append(keyHeader1, valueHeader1)
  console.log('keyheader', valueHeader1, keyHeader1);
  headers.append(keyHeader1, valueHeader1)
  console.log(headers.get('Accept'), '=======', headers.headers);
  event.preventDefault()
  let url = ''
  url = host + '?'
  for (var i = 0; i < docKeyLength - 1; i++) {
    if(document.getElementsByClassName("key")[i].value.length !== 0){
      url += document.getElementsByClassName("key")[i].value + '=' + document.getElementsByClassName("value")[i].value + '&'
    }
  }
  url = url.substring(0, url.length - 1)
  console.log('url=====', url)

  fetch(url, headers)
    .then(function(response){
      console.log('made it',response)
    })

  document.getElementById("request_content").innerText = method + ' ' + protocol
  document.getElementById("request_content2").innerText = url
  // document.getElementById("request_content3").innerText = headersArray
}
