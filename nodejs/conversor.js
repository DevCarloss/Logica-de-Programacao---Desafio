const readline = require('readline') // Importa o módulo readline
// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Pergunta ao usuário qual a temperatura em Fahrenheit
rl.question('Qual a temperatura em Fahrenheit: ', (fahrenheit) => {
    // Converte a temperatura para Celsius
    async function converter_fahrenheit_para_celsius(){
        let celsius = await (fahrenheit - 32) * 5 / 9 // Calcula a temperatura
        return console.log(`A temperatura em Celsius é ${celsius}°C`) // Imprime o resultado
    }
    // Chama a função
    converter_fahrenheit_para_celsius()
    // Fecha a interface
    rl.close()
})