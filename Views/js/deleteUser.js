function deleteUserByID() {
  user_id = document.getElementById("user_id").value;

  fetch(`/users/${user_id}`, { method: "DELETE" })
    .then((res) => res.text())
    .then((res) => console.log(res));
}
