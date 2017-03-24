//search uriencoded
//use new header
//search fetch
//construct url

const protocol = 'http/1.1'
const method = document.getElementsByClassName("method-input")[0].value
const docKeyLength = document.getElementsByClassName("key").length
const docValLength = document.getElementsByClassName("value").length
// const headerOptions = document.getElementsByClassName('daheaders')
// const headerValue = document.getElementsByClassName('select')



function construct(event) {
  const host = document.getElementsByClassName("host-input")[0].value
  const keyHeader1 = document.getElementById('header-key1').value
  const valueHeader1 = document.getElementById('header-value1').value
  const keyHeader2 = document.getElementById('header-key2').value
  const valueHeader2 = document.getElementById('header-value2').value
  const keyHeader3 = document.getElementById('header-key3').value
  const valueHeader3 = document.getElementById('header-value3').value
  let init = {}
  if(keyHeader1.length === 0){
    // console.log('===================',keyHeader1.length);
    init[keyHeader1] = valueHeader1
  }
  if(keyHeader2.length === 0){
    init[keyHeader2] = valueHeader2
  }
  if(keyHeader3.length === 0){
    init[keyHeader3] = valueHeader3
  }
  console.log('headers',init, docKeyLength);
  const hs = new Headers(init)

  event.preventDefault()
  let url = ''
  url += host
  if(document.getElementsByClassName("key")[0].value.length !== 0){
    url +='?'
    for (var i = 0; i < docKeyLength - 1; i++) {
      if(document.getElementsByClassName("key")[i].value.length !== 0){
        url += document.getElementsByClassName("key")[i].value + '=' + document.getElementsByClassName("value")[i].value + '&'
        //TODO: add uri encoding here ^
      }
    }
    url = url.substring(0, url.length - 1)
  }
  let myRequest = new Request(url, hs)
  fetch(myRequest)
    .then((response) => {
      console.dir(response)
      document.getElementById("response-space").innerText = response
    })

  document.getElementById("request_content").innerText = method + ' ' + protocol
  document.getElementById("request_content2").innerText = url
  // document.getElementById("request_content3").innerText = headersArray
}
