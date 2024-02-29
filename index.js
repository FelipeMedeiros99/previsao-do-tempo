// receber informações do tempo e plotar na tela as informações
let dadosServidor = ''

function armazenaDados(dados){
    dadosServidor = dados.data 
    console.log(dadosServidor)
}

function plotaErro(erro){
    console.log(erro)
}

function recebeDados(lat, long){
    let key = '1e6bf955cfafd3192c920bc980b3292d'
    let link = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`
    let promessa = axios.get(link)
    promessa.then(armazenaDados)
    promessa.catch(plotaErro)
}

recebeDados(-2.53073, -44.3068) 