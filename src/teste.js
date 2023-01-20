fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => {
    return response.json()
}).then(corpo =>{
    console.log(corpo)
})

function Value(){
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => {
        return response.json()
    }).then(value => {
        document.getElementById('cotacao-dolar') = addEventListener('click', mostrarCotacao()) ? 
        mostrarCotacao():false
    }).then(date => {
        document.getElementById('cotacao-dolar') = addEventListener('load', showTime()) ? showTime:false

    })
}

function mostrarCotacao(){
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => {
        return response.json()
    }).then(value => {
        document.getElementById('bt-mostrar').innerHTML = value.USDBRL.bid +' '+ 'USD'
    })
}

function Fechar(){
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => {
        return response.json()
    }).then(value => {
        document.getElementById('bt-mostrar').innerHTML = 'Mostrar'
    })
}


function showTime(){
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => {
        return response.json()
    }).then(value => {
         document.getElementById('date-last-cotacao').innerHTML = value.USDBRL.create_date
       
    })
}showTime()
