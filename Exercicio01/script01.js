paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia']

for(let i=0; i<11; i++){
    console.log(paises[i]);
}

paises.lenght;
console.log(paises.length);

paises.unshift("Portugal");

paises.push("Espanha");

const last3 = paises.slice(-3);
console.log(last3);

const paises1 = paises.join (" - ");
console.log(paises1);