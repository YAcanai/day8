document.querySelector(".header-burger").addEventListener("click", (e) => {
  e.target.classList.toggle("open");
});

window.addEventListener("scroll", function () {
  console.log(pageYOffset);
  if (pageYOffset > 1100) {
    document.querySelector(".tube").style.backgroundPositionX = "left";
    document.querySelector(".tube").classList.add("absolut");
    document.querySelector("body").style.background = "#F3F7F9";
  }
  if (pageYOffset > 2421 && pageYOffset < 3556) {
    document.querySelector(".tube").style.backgroundPositionX = "center";
    document.querySelector("body").style.background = "#F6F1EE";
  }
  if (pageYOffset > 3556 && pageYOffset < 4600) {
    document.querySelector(".tube").style.backgroundPositionX = "right";
    document.querySelector("body").style.background = "#F8FDF3";
  }
  if (pageYOffset > 4600) {
    document.querySelector(".tube").classList.remove("absolut");
    document.querySelector("body").style.background = "#fefefe";
  }
  if (pageYOffset < 1100) {
    document.querySelector(".tube").classList.remove("absolut");
    document.querySelector("body").style.background = "#fefefe";
  }
});

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".img1").style.transform =
    "translateY(" + scrollTop * 0.1 + "px)";
  document.querySelector(".img2").style.transform =
    "translateY(" + scrollTop * 0.3 + "px)";
  document.querySelector(".img3").style.transform =
    "translateY(" + scrollTop * 0.1 + "px)";
  document.querySelector(".img4").style.transform =
    "translateY(" + scrollTop * 0.3 + "px)";
  document.querySelector(".img5").style.transform =
    "translateY(" + scrollTop * 0.1 + "px)";
  document.querySelector(".img6").style.transform =
    "translateY(" + scrollTop * 0.2 + "px)";
  document.querySelector(".img7").style.transform =
    "translateY(" + scrollTop * 0.2 + "px)";
  document.querySelector(".img8").style.transform =
    "translateY(" + scrollTop * 0.4 + "px)";
});
