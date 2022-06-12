function crypt(password) {
  let encPassword = "";
  let key =
    "t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)H+MbQeT";
  for (let i = 0; i < Math.min(password.length, key.length); i++) {
    // append the result of the char from the code-point that results from
    // XORing the char codes (or 0 if one string is too short)
    encPassword += String.fromCharCode(
      (password.charCodeAt(i) || 0) ^ (key.charCodeAt(i) || 0)
    );
  }
  return encPassword;
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let s = "";
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  encPassword = crypt(password);
  fetch("/users", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: encPassword,
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
