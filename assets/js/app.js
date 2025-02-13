setInterval(function () {
  let currentDate = new Date();
  let dateString = currentDate.toLocaleString();
  document.getElementById("showTime").innerHTML = dateString;
}, 1000);

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header_section nav");
  if (window.scrollY > 50) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});