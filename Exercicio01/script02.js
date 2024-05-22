function conta(preço, desconto) {
    if (desconto < 10) {
        return preço - (preço * (desconto / 100));
    } else if (desconto > 10 && desconto < 30) {
        return preço - (preço * (desconto / 100));
    } else if (desconto === 0) {
        return preço * 2;
    }
}
console.log(conta(100, 20));
console.log(conta(50, 0));
console.log(conta(200, 5));