const myForm = document.getElementById("productForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var title = document.getElementById("title").value;
  var type = document.getElementById("type").value;
  var price = document.getElementById("price").value;
  var origin = document.getElementById("origin").value;
  var utilisation = document.getElementById("utilisation").value;
  var label = document.querySelector("#label").checked;
  var image = document.getElementById("image").value;
  var user_id = localStorage.getItem("id");
  console.log(user_id);
  fetch("/products", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      type: type,
      price: price,
      origin: origin,
      utilisation: utilisation,
      label: label,
      image: image,
      user_id: user_id,
    }),
    headers: { "Content-type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
