var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  let nav = document.getElementsByClassName("rwd_nav")[0];
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else if (nav.style.display === "block") {
    nav.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (e.target.closest("span")) {
    let span_el = e.target.closest("span");
    if (span_el.classList.contains("bookmarks")) {
      span_el.classList.toggle("-on");
      // if (span_el.classList.contains("-on")) {
      //   span_el.classList.remove("-on");
      // } else {
      //   span_el.classList.add("-on");
      // }
    }
  }
});

function logIn() {
  let signUp = document.getElementById("signUp");
  let signIn = document.getElementById("signIn");
  signUp.classList.toggle("-none");
  signIn.classList.toggle("-none");
}

function addnewpost() {
  let newpost = document.getElementById("new-post");
  if (newpost.style.display === "none") {
    newpost.style.display = "block";
  } else if (newpost.style.display === "block") {
    newpost.style.display = "none";
  }
}

function openpopup() {
  let popup = document.getElementById("popup1");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else if (popup1.style.display === "block") {
    popup.style.display = "none";
  }
}

function openpopupx() {
  let popup = document.getElementById("popup2");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else if (popup.style.display === "block") {
    popup.style.display = "none";
  }
}

function add() {
  let x = document.getElementById("number").value;
  if (x < 10) {
    x = parseInt(x) + 1;
  }
  document.getElementById("number").value = x;
}

function minus() {
  let x = document.getElementById("number").value;
  if (x > 1) {
    x = parseInt(x) - 1;
  }
  document.getElementById("number").value = x;
}

function copyUrl() {
  /*     
    要複製頁面上的內容，我們可以使用 exeCommand('copy')，但首先要複製的內容需要存在頁面上
    如果想要複製的內容不在頁面上，就必須先產生一個 html 元素，在複製後馬上刪掉即
    */
  var copyText = document.createElement("input"),
    url = window.location.href;
  document.body.appendChild(copyText);
  copyText.value = url;
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  alert("已複製好，可分享。");
}
