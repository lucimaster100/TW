class AdminCheck {
  constructor() {
    const user_id = localStorage.getItem("id");
    fetch(`/usersById/${user_id}`).then((response) => {
      if (!response.ok) throw Error(ERROR);
      return response.json();
    }).then(data=>{
      if (data[0].isAdmin == false) {
        window.location.replace("/home.html");
      }

    })
  }

}
