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

document.addEventListener("DOMContentLoaded", function () {
  let backToTopBtn = document.getElementById("backToTopBtn");

  // Show the button when scrolling down
  window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  };

  // Scroll to top smoothly
  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
