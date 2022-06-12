function deleteProductByID(){
    product_id=document.getElementById('product_id').value
    console.log(product_id)
    fetch(`/products/${product_id}`,{method:'DELETE'})
        .then(res => res.text())
        .then(res => console.log(res))
}
