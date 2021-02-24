function calculo(){
    var n = Number(window.document.getElementById('n').value)
    var c = window.document.getElementById('calc')

    if (n > 10) {
        c.innerText = `Conseguiste :D`
    } else if (n == 10) {
        c.innerText = `Beep Boop`
    } else if (n < 10) {
        c.innerText = `Ate um robo acertava :(`
        
    }
}