document.addEventListener('DOMContentLoaded', () => {
    const itemSelect = document.getElementById('item-select');
    const itemQuantity = document.getElementById('item-quantity');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartTableBody = document.querySelector('#cart-table tbody');
    const totalValueSpan = document.getElementById('total-value');
    
    const cart = new Map();
    
    function updateCart() {
        cartTableBody.innerHTML = '';
        let totalValue = 0;
        
        cart.forEach((item, name) => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            row.appendChild(nameCell);
            
            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            row.appendChild(quantityCell);
            
            const priceCell = document.createElement('td');
            priceCell.textContent = `${item.price}`;
            row.appendChild(priceCell);
            
            const totalCell = document.createElement('td');
            totalCell.textContent = `${item.total}`;
            row.appendChild(totalCell);
            
            cartTableBody.appendChild(row);
            
            totalValue += item.total;
        });
        
        totalValueSpan.textContent = totalValue.toFixed(2);
    }
    
    addToCartButton.addEventListener('click', () => {
        const selectedItem = itemSelect.options[itemSelect.selectedIndex];
        const itemName = selectedItem.value;
        const itemPrice = parseFloat(selectedItem.getAttribute('data-price'));
        const quantity = parseInt(itemQuantity.value);
        
        if (cart.has(itemName)) {
            const existingItem = cart.get(itemName);
            existingItem.quantity += quantity;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            const newItem = {
                price: itemPrice,
                quantity: quantity,
                total: itemPrice * quantity
            };
            cart.set(itemName, newItem);
        }
        
        updateCart();
    });
});
