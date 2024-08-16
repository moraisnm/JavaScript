document.addEventListener('DOMContentLoaded', async () => {
    const productDetailsElement = document.getElementById('product-details');
    const relatedProductsElement = document.getElementById('related-products');
    const footerElement = document.getElementById('footer');

    // Obter o ID do produto a partir da query string
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 1; // Se não houver ID na query string, usa 1 como padrão

    try {
    
    // Obter o produto pelo ID
        const productResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await productResponse.json();

    // Preencher os detalhes do produto
        productDetailsElement.innerHTML = `
            <h1>${product.title}</h1>
            <img src="${product.image}" alt="${product.title}">
            <p class="product-id">Product id: ${product.id}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;

    // Obter produtos relacionados pela categoria
        const relatedProductsResponse = await fetch(`https://fakestoreapi.com/products/category/${product.category}`);
        const relatedProducts = await relatedProductsResponse.json();

    // Listar os 3 primeiros produtos relacionados
        relatedProducts.slice(0, 3).forEach(relatedProduct => {
            const relatedProductItem = document.createElement('div');
            relatedProductItem.className = 'related-product-item';

            relatedProductItem.innerHTML = `
                <h3>${relatedProduct.title}</h3>
                <img src="${relatedProduct.image}" alt="${relatedProduct.title}">
                <p><strong>Price:</strong> $${relatedProduct.price}</p>
            `;

            relatedProductsElement.appendChild(relatedProductItem);
        });

    } catch (error) {
        console.error('Erro ao carregar o produto ou os produtos relacionados:', error);
        productDetailsElement.innerHTML = '<p>Erro ao carregar os detalhes do produto.</p>';
    }

    // Adicionar o texto "Copyright 2024" no footer
    const currentYear = new Date().getFullYear();
    footerElement.textContent = `Copyright ${currentYear}`;
});