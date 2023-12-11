function check() {
  if(num.value == '') {
    error.style.display = "block"
    message.style.display = "none"
    error.innerHTML = "ENTER A NUMBER!!!"
  }else if(num.value < 0) {
    error.style.display = "block"
    message.style.display = "none"
    error.innerHTML = "NUMBER CAN NOT BE NEGATIVE!!!"
    num.value = ''
  }
  else if (num.value % 2 === 0 ){
    message.innerHTML = num.value + " is an even number!"
    message.style.display = "block"
    error.style.display = "none"
    num.value = ''
  }else {
    message.innerHTML = num.value + " is an odd number!"
    message.style.display = "block"
    error.style.display = "none"
    num.value = ''
  }
}


function checked() {
  if(three.value == '') {
    errorr.style.display = "block"
    errmessage.style.display = "none"
    errorr.innerHTML = "ENTER A NUMBER!!!"
  }else if(three.value < 0) {
    error.style.display = "block"
    errmessage.style.display = "none"
    errorr.innerHTML = "NUMBER CAN NOT BE NEGATIVE!!!"
    three.value = ''
  }
  else if (three.value % 5 === 0 && three.value % 3 === 0 ){
    errmessage.innerHTML = "FIZZBUZZ!"
    errmessage.style.display = "block"
    errorr.style.display = "none"
    three.value = ''
  }

  else if (three.value % 3 === 0 ){
    errmessage.innerHTML = "FIZZ!"
    errmessage.style.display = "block"
    errorr.style.display = "none"
    three.value = ''
  }
  else if (three.value % 5 === 0 ){
    errmessage.innerHTML = "BUZZ!"
    errmessage.style.display = "block"
    errorr.style.display = "none"
    three.value = ''
  }

  
  else {
    errmessage.innerHTML = three.value + " is not divisible by 3 or 5!"
    errmessage.style.display = "block"
    errorr.style.display = "none"
    three.value = ''
  }
}