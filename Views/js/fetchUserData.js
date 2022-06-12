function fetchUserProfile() {
  var user_id = localStorage.getItem("id");
  fetch(`/userProfileById/${user_id}`)
    .then((response) => {
      if (!response.ok) throw Error(ERROR);
      return response.json();
    })
    .then((data) => {
      var image;

      if (!data.img) {
        image = "photos/defaultImages/DefaultUser.jpg";
      } else {
        image = data.img;
      }
      const html = `<div class="avatar">
            <img src="${image}" height="150" width="150" alt="Error">

        </div>

        <h2>My Profile </h2>
        <div class="paragraphs">
            <p>${data.description}</p>
        </div>`;
      document.querySelector(".profileSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchUserProfile();
