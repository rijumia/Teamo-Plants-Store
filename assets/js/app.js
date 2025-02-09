setInterval(function () {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    document.getElementById("showTime").innerHTML = dateString;
  }, 1000);