function scrollToProducts() {
    document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
}

function purchaseProduct() {
    let quantity = document.getElementById('quantity').value;
    if (quantity > 0) {
        alert(`You have purchased ${quantity} ClimaWear Jackets!`);
    } else {
        alert('Please select a valid quantity.');
    }
}
