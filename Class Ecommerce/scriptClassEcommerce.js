// Class Ecommerce

class Ecommerce {

    constructor(products) {
        this.products = [],
        this.cart = []
    };

    addProduct(product) {
        this.products.push(product);
    };

    setProductPrice(productId, price) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.price = price;
        }
    };

    getAllProducts() {
        return this.products;
    };

    getAllProductsNames() {
        return this.products.map(p => p.name).join('; ');
    };

    getProductById(productId) {
        return this.products.find(p => p.id === productId);
    };

    getProductByName (productName) {
        return this.products.find(p => p.name === productName);
    };

    getProductsByPrice(initialPrice, finalPrice) {
        return this.products.filter(p => p.price >= initialPrice && p.price <= finalPrice);
    };

    addProductToCart(product) {
        this.cart.push(product);
    };

    getCart() {
        return this.cart;
    };

    getCartTotalPrice(){
        return this.cart.reduce((total, product) => total + product.price, 0);
    };
}

const product1 = { id: 1, name: 'Pão', price: 10 };
const product2 = { id: 2, name: 'Massa', price: 100 };

const ecommerce = new Ecommerce()

// Adicionar produtos
ecommerce.addProduct(product1)
ecommerce.addProduct(product2)
ecommerce.addProduct({ id:3, name: 'Batata', price: 800});

// Obter todos os produtos
console.log(ecommerce.getAllProducts());

// Atualizar o preço de um produto
ecommerce.setProductPrice(5, 105);

console.log(ecommerce.getProductById(1))

// Obter os nomes de todos os produtos
console.log(ecommerce.getAllProductsNames());
    
// Obter produto por ID
console.log(ecommerce.getProductById(1));
    
// Obter o produto por nome
console.log(ecommerce.getProductByName('Pão'));

// Obter produtos por faixa de preço
console.log(ecommerce.getProductsByPrice(10, 100));

// Adicionar produto ao carrinho
ecommerce.addProductToCart(ecommerce.getProductById(1));
ecommerce.addProductToCart(ecommerce.getProductById(2));
    
// Obter produtos do carrinho
console.log(ecommerce.getCart());
    
// Obter o preço total do carrinho
console.log(ecommerce.getCartTotalPrice());