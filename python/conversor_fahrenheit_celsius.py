# Logica de Programação - Excercício 
print("Conversor Fahrenheit para Celsius")
valor_da_temperatura = float(input("Escreva a temperatura em fahrenheit: ")) # Variável que recebe o valor da temperatura em fahrenheit
def converter_fahrenheit_para_celsius(): # Função que converte o valor da temperatura em fahrenheit para celsius
    celsius = (valor_da_temperatura - 32) * 5 / 9
    return print("A temperatura em grau celsius é: {}{}".format(celsius, "°C")) # Retorna o valor da temperatura em celsius
converter_fahrenheit_para_celsius()
    

