document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // OBTER VALORES DE ENTRADA INFORMADOS PELO USUÁRIO
    const valor = parseFloat(document.getElementById('valor').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // DEFINIR TAXAS DE CÂMBIO FIXAS 
    const exchangeRates = {
        // exchangeRates OBJETO 
        USD: {BRL: 5.70, EUR: 0.93},
        BRL: {USD: 0.18, EUR: 0.16},
        EUR: {USD: 1.08, BRL: 6.16}
    };

    // CONVERSÃO SIMPLES DE MORDAS 
    let valorConvertido;
    if (daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }

    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
    // CONTEUDO DE TEXTO DENTRO DO ELEMENTO
});