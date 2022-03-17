const convert = () => {
    const span = document.querySelector('.display')
    const number = document.querySelector('#number').value
    for(var i = 0; i < number.length; i++) {
        if(number[i] > 1) {
            span.style.width = '300px'
            span.innerHTML = "BINÁRIO P/ DECIMAL"
            return
        }
    }
    span.style.width = '150px'
    span.innerHTML = parseInt(number, 2)
}
