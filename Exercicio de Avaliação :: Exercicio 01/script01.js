//Função Anónima

(function () {
    console.log("isto foi demasiado rápido!");
})();

// Closure
function formulário(nome) {
    return function () {
        return {
            nome: nome
        };
    }
}
const funcao = formulário("Maria Amélia");
console.log(funcao());

// Função Construtora
function Sanita(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}
const sanitaNova = new Sanita("Rocca", 2024);
sanitaNova.modelo = 2.5;
console.log(parseInt(sanitaNova.modelo));