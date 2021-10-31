document.addEventListener("DOMContentLoaded", () => {
  // username & password validation
  document.querySelector("#username").onkeyup = () => {
    let usernameInput = document.querySelector("#username").value;
    let passwordInput = document.querySelector("#password").value;
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      document.querySelector("#btn-submit").disabled = false;
      document.querySelector("#btn-submit").style.backgroundColor = "white";
    } else {
      document.querySelector("#btn-submit").disabled = true;
      document.querySelector("#btn-submit").style.backgroundColor =
        "transparent";
    }
  };

  // username & password validation
  document.querySelector("#password").onkeyup = () => {
    let usernameInput = document.querySelector("#username").value;
    let passwordInput = document.querySelector("#password").value;
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      document.querySelector("#btn-submit").disabled = false;
      document.querySelector("#btn-submit").style.backgroundColor = "white";
    } else {
      document.querySelector("#btn-submit").disabled = true;
      document.querySelector("#btn-submit").style.backgroundColor =
        "transparent";
    }
  };

  document.querySelector("#btn-submit").onclick = () => {
    let username = document.querySelector("#username").value;

    // base way to create a cookie
    // document.cookie = "username=" + username + ";";

    // create cookie with key of username lasting 10 min
    createCookie("username", username, 10);

    // redirect user upon login
    window.location.href = "index.html";

    // make button NOT redirect
    return false;
  };
});

// create cookie
function createCookie(name, value, minutes) {
  let date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  let expires = "; expires=" + date.toUTCString() + ";";
  document.cookie = String(name) + "=" + String(value) + String(expires);
}
