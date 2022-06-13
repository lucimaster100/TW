function deleteProductByID() {
  product_id = document.getElementById("product_id").value;

  fetch(`/products/${product_id}`, { method: "DELETE" })
    .then((res) => res.text())
    .then((res) => console.log(res));
}
