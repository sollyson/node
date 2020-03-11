const titulo = "Generation Brasil"

function maiuscula (nome) {

    return nome.toUpperCase();
}

function minuscula (nome) {

    return nome.toLowerCase();
}

function numeroDeLetras (nome) {
    letras = nome
    return nome.length
}

// para usar funções devemos exportar
module.exports = {
    maiuscula,
    minuscula,
    numeroDeLetras,
    titulo
}