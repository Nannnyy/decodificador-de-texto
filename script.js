function adquirirTexto() {
    return document.getElementById("caixa_texto").value;
}

function criptografarTexto() {
    let texto = adquirirTexto();

    const criptografar = {
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o": "ober",
        "u": "ufat"
    };

    let novo_texto = texto.split('').map(char => criptografar[char] || char).join('');
    console.log(novo_texto);

    document.getElementById('resultado_processo').innerText = novo_texto;
    mostrarResultado()
}

function descriptografarTexto() {
    let texto = adquirirTexto();

    const descriptografar = {
        'enter' : 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
    };

    let novo_texto = texto;
    for (let [letra_criptografada, letra] of Object.entries(descriptografar)) {
        let expressao_criptografada = new RegExp(letra_criptografada, 'g');
        
        novo_texto = novo_texto.replace(expressao_criptografada, letra);
    };

    console.log(novo_texto);

    document.getElementById('resultado_processo').innerText = novo_texto;
}

function mostrarResultado() {

    document.getElementById('operacao_resultado').style.display = "flex";
    document.getElementById('container_procura').style.display = "none"
}

function copiar() {
    elemento = document.getElementById('resultado_processo');
    navigator.clipboard.writeText(elemento.value);
}