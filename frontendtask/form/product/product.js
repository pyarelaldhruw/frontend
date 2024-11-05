const form = document.querySelector('.form')
const productList = document.querySelector('.product-list')

// Load existing products from localStorage
let products = JSON.parse(localStorage.getItem('products')) || []

// Display existing products
function displayProducts() {
    if (!productList) {
        const productListDiv = document.createElement('div')
        productListDiv.className = 'product-list'
        document.body.appendChild(productListDiv)
    }
    
    const list = document.querySelector('.product-list')
    list.innerHTML = ''
    
    products.forEach((product, index) => {
        const productDiv = document.createElement('div')
        productDiv.className = 'product-item'
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" style="max-width: 100px;">
            <h3>${product.name}</h3>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <p>Brand: ${product.brand}</p>
            <button onclick="deleteProduct(${index})">Delete</button>
        `
        list.appendChild(productDiv)
    })
}

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const imageFile = document.getElementById('image').files[0]
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : ''
    
    const product = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        stock: document.getElementById('stock').value,
        brand: document.getElementById('brand').value,
        imageUrl: imageUrl
    }
    
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    
    // Reset form
    form.reset()
    
    // Update display
    displayProducts()
})

// Delete product function
function deleteProduct(index) {
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    displayProducts()
}

// Initial display of products
displayProducts()
