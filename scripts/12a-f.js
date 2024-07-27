const add = function () {
  console.log(2 + 3);
};

function runTwice(param) {
  for (let i = 0; i < 2; i++) {
    param();
  }
}
runTwice(add);

function change() {
  const btn = document.querySelector(".js-btn");
  btn.innerHTML = "Loading";
  setTimeout(function () {
    btn.innerHTML = "Finished";
  }, 1000);
}

let timeoutId;
function addToCart() {
  const btnElement = document.querySelector(".show-added");
  btnElement.innerHTML = "Added";
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    btnElement.innerHTML = "";
  }, 2000);
}

let message = 2;
let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }
  isDisplayingNotification = true;

  intervalId = setInterval(function () {
    if (document.title === "Document") {
      document.title = `(${message}) New message`;
    } else {
      document.title = "Document";
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;
  clearInterval(intervalId);
  document, (title = "Document");
}
