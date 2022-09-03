const ThemeSwitcher = document.querySelector(".theme-switcher-toggle");
ThemeSwitcher.addEventListener("click", () => {
  document.querySelector(".theme-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".theme-switcher").classList.contains("open")) {
    document.querySelector(".theme-switcher").classList.remove("open");
  }
});

const ChangeTheme = document.querySelectorAll(".change-style");
function SetStyle(color) {
  ChangeTheme.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const DayNight = document.querySelector(".day-night-switch");

DayNight.addEventListener("click", () => {
  DayNight.querySelector("i").classList.toggle("fa-sun");
  DayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    DayNight.querySelector("i").classList.add("fa-sun");
  } else {
    DayNight.querySelector("i").classList.add("fa-moon");
  }
});

var two = $("#about").waypoint(
  function (direction) {
    if (direction === "down") {
      $(".fa-house-chimney").removeClass("active");
      $(".fa-user").addClass("active");
    } else {
      $(".fa-house-chimney").addClass("active");
      $(".fa-user").removeClass("active");
    }
  },
  {
    offset: "1%",
  }
);

var three = $("#service").waypoint(
  function (direction) {
    if (direction === "down") {
      $(".fa-user").removeClass("active");
      $(".fa-list-check").addClass("active");
    } else {
      $(".fa-user").addClass("active");
      $(".fa-list-check").removeClass("active");
    }
  },
  {
    offset: "6%",
  }
);

var four = $("#portfolio").waypoint(
  function (direction) {
    if (direction === "down") {
      $(".fa-list-check").removeClass("active");
      $(".fa-briefcase").addClass("active");
    } else {
      $(".fa-list-check").addClass("active");
      $(".fa-briefcase").removeClass("active");
    }
  },
  {
    offset: "4%",
  }
);

var four = $("#contact").waypoint(
  function (direction) {
    if (direction === "down") {
      $(".fa-briefcase").removeClass("active");
      $(".fa-comments").addClass("active");
    } else {
      $(".fa-briefcase").addClass("active");
      $(".fa-comments").removeClass("active");
    }
  },
  {
    offset: "4%",
  }
);

function sendMail() {
  if (
    document.getElementById("name").value != "" &&
    document.getElementById("mail").value != "" &&
    document.getElementById("message").value != ""
  ) {
    let params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("mail").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_6f50npm", "template_i3v53cl", params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("message").value = "";
      alert("Email send successfully" + "status code : " + res.status);
    });
  } else {
    alert("Fill all info");
  }
}
