document.addEventListener("DOMContentLoaded", () => {
  // if user logged in, hide Login link
  if (document.cookie) {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#logout").style.display = "inline-block";
  } else {
    document.querySelector("#login").style.display = "inline-block";
    document.querySelector("#logout").style.display = "none";
  }

  // toggle nav
  document.querySelector("#nav-toggle").onclick = () => {
    let navWrapper = document.querySelector("nav");
    let nav = document.querySelector("#nav");

    if (nav.style.display !== "flex") {
      nav.style.display = "flex";
      document.querySelector("#nav-toggle").style.backgroundColor =
        "rgb(33, 33, 33)";
      document.querySelector("#nav-toggle").style.color = "#d9204e";
      navWrapper.style.backgroundColor = "#d9204e";
    } else {
      nav.style.display = "none";
      navWrapper.style.backgroundColor = "transparent";
      document.querySelector("#nav-toggle").style.backgroundColor = "#d9204e";
      document.querySelector("#nav-toggle").style.color = "rgb(33, 33, 33)";
    }
  };

  // log user out
  document.querySelector("#logout").onclick = () => {
    // clear username cookie
    deleteCookie("username");
  };
});

// get cookie
// function getCookie(name) {
//     return document.cookie.split(';').some(c => {
//         return c.trim().startsWith(name + '=');
//     });
// }

// delete cookie
function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
