document.addEventListener("DOMContentLoaded", () => {
  let login = document.querySelector("#login");
  let logout = document.querySelector("#logout");

  // if user logged in, hide Login link
  if (document.cookie) {
    login.style.display = "none";
    logout.style.display = "inline-block";
  } else {
    login.style.display = "inline-block";
    logout.style.display = "none";
  }

  let navToggle = document.querySelector("#nav-toggle");

  // toggle nav
  navToggle.onclick = () => {
    let navWrapper = document.querySelector("nav");
    let nav = document.querySelector("#nav");

    if (nav.style.display !== "flex") {
      nav.style.display = "flex";
      navToggle.style.backgroundColor = "rgb(33, 33, 33)";
      navToggle.style.color = "#d9204e";
      navWrapper.style.backgroundColor = "#d9204e";
    } else {
      nav.style.display = "none";
      navWrapper.style.backgroundColor = "transparent";
      navToggle.style.backgroundColor = "#d9204e";
      navToggle.style.color = "rgb(33, 33, 33)";
    }
  };

  // log user out
  logout.onclick = () => {
    // clear username cookie
    deleteCookie("username");
  };

  // validate that #currency-converter exists on current page
  if (document.querySelector("#currency-converter")) {
    // convert BTC to 1 of inputted currency
    document.querySelector("#currency-converter").onsubmit = () => {
      fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
        .then((response) => response.json())
        .then((d) => {
          // d wraps the JSON response

          // sanitize user input
          let currency = document
            .querySelector("#currency")
            .value.toUpperCase();

          // get value corresponding to key currency
          let rate = d.data.rates[currency];

          if (rate !== undefined) {
            document.querySelector(
              "#currency-result"
            ).innerHTML = `1 BTC is currently equal to ${rate} ${currency}`;
          } else {
            document.querySelector("#currency-result").innerHTML =
              "Unable to convert that currency.";
          }
        })
        .catch((error) => {
          // catch any errors with fetching API
          console.log("Error: ", error);
        });

      return false;
    };
  }
});

// function to delete cookie
function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

// function to get cookie
function getCookie(name) {
  let cookie = {};
  document.cookie.split(";").forEach((el) => {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });
  return cookie[name];
}
