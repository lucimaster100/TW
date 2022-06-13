const myForm = document.getElementById("descriptionForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var description = document.getElementById("description").value;
  var user_id = localStorage.getItem("id");
  fetch(`/users/${user_id}`, {
    method: "PUT",
    body: JSON.stringify({
      description: description,
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
