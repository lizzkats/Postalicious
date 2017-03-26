const protocol = 'http/1.1'
const method = document.getElementsByClassName("method-input")[0].value
const docKeyLength = document.getElementsByClassName("key").length
const docValLength = document.getElementsByClassName("value").length

function construct(event) {
  event.preventDefault()
  const host = document.getElementsByClassName("host-input")[0].value
  const keyHeader1 = document.getElementById('header-key1').value
  const valueHeader1 = document.getElementById('header-value1').value
  const keyHeader2 = document.getElementById('header-key2').value
  const valueHeader2 = document.getElementById('header-value2').value
  const keyHeader3 = document.getElementById('header-key3').value
  const valueHeader3 = document.getElementById('header-value3').value
  const bodyBox = document.getElementById('request_body').value
  let responseHeaders = []
  let responseHeaderValues = []
  let headersAndValues = []
  let status, statusText
  let init = {}

  if(keyHeader1.length === 0){
    init[keyHeader1] = valueHeader1
  }
  if(keyHeader2.length === 0){
    init[keyHeader2] = valueHeader2
  }
  if(keyHeader3.length === 0){
    init[keyHeader3] = valueHeader3
  }

  let url = ''
  url += host
  if(document.getElementsByClassName("key")[0].value.length !== 0){
    url +='?'
    for (var i = 0; i < docKeyLength - 1; i++) {
      if(document.getElementsByClassName("key")[i].value.length !== 0){
        url += uriEncondingComponent(document.getElementsByClassName("key")[i].value) + '=' + uriEncondingComponent(document.getElementsByClassName("value")[i].value + '&')
      }
    }
    url = url.substring(0, url.length - 1)
  }

  let myRequest = new Request(url)
  myRequest.body = bodyBox

  fetch(myRequest)
    .then(response => {
      document.getElementById("response-info1").innerText = 'status: ' + response.status + '\n' +'statusText: ' + response.statusText
      return response.blob()
    }).then(result => {
      var reader = new FileReader();
      reader.addEventListener("loadend", function() {
       if(result.type === 'application/json') {
         //TODO:
       }
       if(result.type === 'text/plain'){
         let output = ''
         output += reader.result + '\n'
         output += 'content-type: ' + result.type + '\n'
         output += 'content-length: ' + result.size + '\n'
         document.getElementById("response-info2").innerText = output
       }
     })
      reader.readAsText(result);
    })

  document.getElementById("request_content").innerText = method + ' ' + protocol
  document.getElementById("request_content2").innerText = url
}
function build(event) {
  event.preventDefault()
  const host = document.getElementsByClassName("host-input")[0].value
  const keyHeader1 = document.getElementById('header-key1').value
  const valueHeader1 = document.getElementById('header-value1').value
  const keyHeader2 = document.getElementById('header-key2').value
  const valueHeader2 = document.getElementById('header-value2').value
  const keyHeader3 = document.getElementById('header-key3').value
  const valueHeader3 = document.getElementById('header-value3').value
  const bodyBox = document.getElementById('request_body').value

  let init = {}

  if(keyHeader1.length === 0){
    init[keyHeader1] = valueHeader1
  }
  if(keyHeader2.length === 0){
    init[keyHeader2] = valueHeader2
  }
  if(keyHeader3.length === 0){
    init[keyHeader3] = valueHeader3
  }

  let url = ''
  url += host
  if(document.getElementsByClassName("key")[0].value.length !== 0){
    url +='?'
    for (var i = 0; i < docKeyLength - 1; i++) {
      if(document.getElementsByClassName("key")[i].value.length !== 0){
        url += uriEncondingComponent(document.getElementsByClassName("key")[i].value) + '=' + uriEncondingComponent(document.getElementsByClassName("value")[i].value + '&')
      }
    }
    url = url.substring(0, url.length - 1)
  }

  document.getElementById("request_content").innerText = method + ' ' + protocol
  document.getElementById("request_content2").innerText = url
}
