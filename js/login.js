document.addEventListener("DOMContentLoaded", () => {
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  let btnSubmit = document.querySelector("#btn-submit");

  // username & password validation
  username.onkeyup = () => {
    let usernameInput = username.value;
    let passwordInput = password.value;
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      btnSubmit.disabled = false;
      btnSubmit.style.backgroundColor = "#d9204e";
    } else {
      btnSubmit.disabled = true;
      btnSubmit.style.backgroundColor = "transparent";
    }
  };

  // username & password validation
  password.onkeyup = () => {
    let usernameInput = username.value;
    let passwordInput = password.value;
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      btnSubmit.disabled = false;
      btnSubmit.style.backgroundColor = "#d9204e";
    } else {
      btnSubmit.disabled = true;
      btnSubmit.style.backgroundColor = "transparent";
    }
  };

  // submit
  btnSubmit.onclick = () => {
    let usernameInput = username.value;

    // create cookie with key of username lasting 10 min
    createCookie("username", usernameInput, 10);

    // redirect user upon login
    window.location.href = "index.html";

    // make button NOT redirect
    return false;
  };
});

// function to create cookie
function createCookie(name, value, minutes) {
  let date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  let expires = "; expires=" + date.toUTCString() + ";";
  document.cookie = String(name) + "=" + String(value) + String(expires);
}
