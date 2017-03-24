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
  console.log('headers',init, docKeyLength);
  // const hs = new Headers(init)

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
  let myRequest = new Request(url)
  myRequest.body = bodyBox
  // console.log('myRequest====......-----', myRequest);

  function groupChunks(readableStream){
    console.log('hererererere',readableStream);
    const lexicon = readableStream.getReader()
    const basket = []

    return grouper()

    function grouper(){
      return lexicon.read().then(({value, done}) => {
        // console.log('basket==========', basket);
        if(done){
          return basket
        }
        basket.push(value)
        return grouper()
      })
    }
  }

  // fetch(myRequest)
  //   .then(response => {
  //     //let hi = groupChunks(response.body)
  //     console.log('response::', response)
  //     response.json().then(result => console.log('RESULT::', result))
  //     //console.log('!!!!!!!!!',groupChunks(result))
  //     for (let i = 0; i < response.headers.keys.length; i++) {
  //       responseHeaders.push(response.headers.keys[i])
  //     }
  //     for (let i = 0; i < response.headers.values.length; i++) {
  //       responseHeaderValues.push(response.headers.values[i])
  //     }
  //     status = response.status
  //     statusText = response.statusText
  //     //console.log('===========result', typeof(hi), hi);
  //     let responseBody // = new TextDecoder("utf-8").decode(hi)
  //     return 'responseBody'
  //   }).then(body => {
  //     console.log('body-----------++', body);
  //     let contentLength = body.length
  //     responseHeaders.forEach((header, index) => {
  //       headersAndValues.push(header)
  //       headersAndValues.push(': ')
  //       headersAndValues.push(responseHeaderValues[index])
  //       headersAndValues.push('\n')
  //     })
  //     console.log('header==========-------',headersAndValues);
  //     document.getElementById("response-space").innerText = headersAndValues + ' ' + status + ' ' + statusText
  //   })

  fetch(myRequest)
    .then(response => {
      console.log('response', response);
      document.getElementById("response-info1").innerText = 'status: ' + response.status + '\n' +'statusText: ' + response.statusText
      return response.blob()
    }).then(result => {
      var reader = new FileReader();
      console.log('blob:', result);
      reader.addEventListener("loadend", function() {
       // reader.result contains the contents of blob as a typed array
       console.log('reader.result::', reader.result);
       if(result.type === 'application/json') {

       }
       if(result.type === 'text/plain'){
         let output = ''
         output += reader.result + '\n'
         output += 'content-type: ' + result.type + '\n'
         output += 'content-length: ' + result.size + '\n'
         document.getElementById("response-info2").innerText = output
       }
      //  document.getElementById("response-space").innerText =
     });
      reader.readAsText(result);
    })

  document.getElementById("request_content").innerText = method + ' ' + protocol
  document.getElementById("request_content2").innerText = url
  // document.getElementById("request_content3").innerText = headersArray
}
