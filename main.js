const substitutionKey = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar(){
    var texto = document.getElementById("text").value.toLowerCase();
    var textoCriptografado = "";


for (var i = 0; i < texto.length; i++){
    var char = texto.charAt(i);
    var substituto = substitutionKey[char] || char;
    textoCriptografado += substituto;
}

document.getElementById("saidaDeTexto").innerHTML = textoCriptografado;
}

const reverseSubstitutionKey = {
    'enter' : 'e',
    'imer' : 'i',
    'ai' : 'a',
    'ober' : 'o',
    'ufat' : 'u'
}

function descriptografar(){
    var texto = document.getElementById("text").value.toLowerCase();
    var textoDescriptografado = "";

    for (var i = 0; i < texto.length; i++){
        var char = texto.charAt(i);
        var substituto = reverseSubstitutionKey[char] || char;
        textoDescriptografado += substituto;
    }

    document.getElementById("saidaDeTexto").innerHTML = textoDescriptografado;

}


/*
function descriptografar() {
    var textoCriptografado = document.getElementById("text").value.toLowerCase();
    var textoDescriptografado = "";

    var reverseSubstitutionKey = {};
    for (var chave in substitutionKey) {
        var valor = substitutionKey[chave];
        reverseSubstitutionKey[valor] = chave;
    }

    for (var i = 0; i < textoCriptografado.length; i++) {
        var char = textoCriptografado.charAt(i);
        var original = reverseSubstitutionKey[char] || char;
        textoDescriptografado += original;
    }

    document.getElementById("saidaDeTexto").innerHTML = textoDescriptografado;
}*/


function copiarTexto() {
    var textoASerCopiado = document.getElementById("saidaDeTexto").innerHTML;

    var elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = textoASerCopiado;

    document.body.appendChild(elementoTemporario);

    elementoTemporario.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporario);
}