document.addEventListener("DOMContentLoaded", () => {
  // get input username
  // store it in a cookie
  // display it
  document.querySelector("#btn-submit").onclick = () => {
    let username = document.querySelector("#username").value;
    // console.log('username: ' + username);

    // base way to create a cookie
    // document.cookie = "username=" + username + ";";

    // create cookie lasting 10 min
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
