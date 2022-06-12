let username = "";

localStorage.removeItem("user");
localStorage.removeItem("id");
localStorage.removeItem("auth");

const fetchUserCredentials = (username) => {
  return fetch(`/usersByName/${username}`)
    .then((res) => res.json())
    .then((UserDataJson) => {
      if (UserDataJson.length === 0) {
        return 0;
      } else {
        return UserDataJson;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //    catch (err) {
  //     console.log(err);
  //   }
};
const getUserData = (username) => {
  return fetchUserCredentials(username)
    .then((jsonData) => {
      return jsonData[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

function submitForm(form, fields) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var error = 0;
    var count = 0;

    const ValidatedFields = fields.map((field) => {
      const input = document.querySelector(`#${field}`);

      if (field === "username") {
        username = input.value;
      }

      return validateFields(input);
      //
      //   }
    });

    Promise.all(ValidatedFields).then((res) => {
      console.log(res);
      if (res[0] && res[1]) {
        localStorage.setItem("auth", 1);
        form.submit();
      }
    });
  });
}

function validateFields(field) {
  return getUserData(username).then((res) => {
    if (!res) {
      setStatus(field, `Wrong Username `, "error");
      return false;
    } else {
      let { username, password, id } = res;
      if (field.value.trim() == "") {
        setStatus(
          field,
          `${field.previousElementSibling.innerText} cannot be blank `,
          "error"
        );

        return false;
      } else {
        if (field.type == "password") {
          if (field.value != password) {
            setStatus(
              field,
              `${field.previousElementSibling.innerText} is wrong `,
              "error"
            );
            return false;
          } else {
            localStorage.setItem("id", id);
            setStatus(field, null, "success");
            return true;
          }
        } else {
          setStatus(field, null, "success");
          return true;
        }
      }
    }
  });
}

function setStatus(field, message, status) {
  //  console.log("Set Status");
  const errorMessage = field.parentElement.querySelector(".error-message");
  if (status == "success") {
    if (errorMessage) {
      errorMessage.innerText = "";
    }
    field.classList.remove("input-error");
  }
  if (status == "error") {
    errorMessage.innerText = message;
    field.classList.add("input-error");
  }
}

const form = document.querySelector(".loginForm");
if (form) {
  const fields = ["username", "password"];

  submitForm(form, fields);
}
