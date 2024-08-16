// Função para carregar produtos da API
        async function loadProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const products = await response.json();
                displayProducts(products);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        }

// Função para mostrar os produtos na grelha
        function displayProducts(products) {
            const productGrid = document.getElementById('product-grid');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productDiv.appendChild(productImage);
                
                const productTitle = document.createElement('h2');
                productTitle.textContent = product.title;
                productDiv.appendChild(productTitle);
                
                const addButton = document.createElement('button');
                addButton.textContent = 'Add to cart';
                addButton.onclick = () => addToCart(product.id);
                productDiv.appendChild(addButton);
                
                productGrid.appendChild(productDiv);
            });
        }
// Função para adicionar produto ao carrinho
        async function addToCart(productId) {
            const payload = {
                userId: 1,  // Um número fixo para exemplo
                date: new Date().toISOString().split('T')[0],  // Data atual no formato YYYY-MM-DD
                products: [{ productId: productId, quantity: 1 }]
            };

            try {
                const response = await fetch('https://fakestoreapi.com/carts/7', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert('Produto adicionado ao carrinho com sucesso!');
                } else {
                    throw new Error('Erro ao adicionar ao carrinho');
                }
            } catch (error) {
                console.error('Erro ao adicionar produto ao carrinho:', error);
            }
        }

// Chama a função para carregar os produtos ao iniciar a página
        loadProducts();