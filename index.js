let chosen = "abtMe";

const texts = {
  aboutMe: {
    heading: "Hi, my name is Oskar. I'm a Full-stack web developer from Poland",
    paragraph: "efagaegaegdag",
  },
  interests: {
    heading: "dagdadafaegf",
    paragraph: "agdadaegeagdsa",
  },
  experience: {
    heading: "gdagdadfeafdafsagae",
    paragraph: "gageagaeegegeagea",
  },
};

const rotator = {
  duration: 500,
  step: function (now) {
    this.style.transform = "rotate(" + now + "deg)";
  },
};

document.getElementById("abtMe").addEventListener("click", function () {
  if (chosen !== "abtMe") {
    const circle = document.getElementById("circle");
    circle.animate([{ top: circle.style.top }, { top: "54px" }], {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    });
    setTimeout(() => {
      const heading = document.getElementById("heading");
      heading.textContent = texts.aboutMe.heading;
      const text = document.getElementById("text");
      text.textContent = texts.aboutMe.paragraph;
    }, 915);
    slideDown();
    chosen = "abtMe";
  }
});

document.getElementById("interests").addEventListener("click", function () {
  if (chosen !== "interests") {
    const circle = document.getElementById("circle");
    circle.animate([{ top: circle.style.top }, { top: "140px" }], {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    });
    setTimeout(() => {
      const heading = document.getElementById("heading");
      heading.textContent = texts.interests.heading;
      const text = document.getElementById("text");
      text.textContent = texts.interests.paragraph;
    }, 915);
    if (chosen === "abtMe") {
      slideUp();
    } else {
      slideDown();
    }
    chosen = "interests";
  }
});

document.getElementById("xp").addEventListener("click", function () {
  if (chosen !== "xp") {
    const circle = document.getElementById("circle");
    circle.animate([{ top: circle.style.top }, { top: "226px" }], {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    });
    setTimeout(() => {
      const heading = document.getElementById("heading");
      heading.textContent = texts.experience.heading;
      const text = document.getElementById("text");
      text.textContent = texts.experience.paragraph;
    }, 915);
    slideUp();
    chosen = "xp";
  }
});

document.getElementById("featuredWork").addEventListener("click", function () {
  const circle = document.getElementById("circle");
  circle.animate([{ top: circle.style.top }, { top: "312px" }], {
    duration: 1000,
    easing: "ease",
    fill: "forwards",
  });
  const myWork = document.getElementById("myWork");
  myWork.animate([{ top: myWork.style.top }, { top: "35%" }], {
    duration: 1000,
    easing: "ease",
    fill: "forwards",
  });
  chosen = "featuredWork";
  slideUp();
});

$(window).on("load resize", () => {
  $(".cover").fadeOut(0);
  $("#heading").text(texts.aboutMe.heading);
  $("#text").text(texts.aboutMe.paragraph);
  if ($(window).width() < 750) {
    $(".abtMe, .featuredWork, .xp, .interests").text("");
    $(".dot").css({ left: "10px" });
    $("#circle").css({ right: "14px" });
  } else if ($(window).width() > 750) {
    $(".abtMe").text("About Me");
    $(".featuredWork").text("Featured Work");
    $(".xp").text("Experience");
    $(".interests").text("Interests");
    $(".dot").css({ left: "180px" });
    $("#circle").css({ right: "13px" });
  }
});

$("#trapezoid").on("click", () => {
  $("#myWork").animate({ top: "+=110%" }, 1000);
  $("#circle").animate({ top: "54px" }, 1000);
  $("#firstH").text("vsafvgrasbhaveavg");
  $("#text").text("wafwafawfa");
  unHide();
  chosen = "abtMe";
});

$("#rockPaperScissors")
  .on("mouseenter", () => {
    $(".rps").fadeIn(200);
  })
  .on("mouseleave", () => {
    $(".rps").fadeOut(200);
  })
  .on("click", () => {
    window.open("https://oskarroch.github.io/rockPaperScissors/");
  });

$("#simonSays")
  .on("mouseenter", () => {
    $(".ss").fadeIn(200);
  })
  .on("mouseleave", () => {
    $(".ss").fadeOut(200);
  })
  .on("click", () => {
    window.open("https://oskarroch.github.io/simonSays/");
  });

$("#keeperApp")
  .on("mouseenter", () => {
    $(".ka").fadeIn(200);
  })
  .on("mouseleave", () => {
    $(".ka").fadeOut(200);
  });

function slideDown() {
  $("#textWrp").animate(
    {
      top: "+=50px",
      right: "-=80px",
      opacity: 0,
      fontSize: "0.9rem",
      deg: 5,
    },
    rotator
  );
  $("h1").animate({ marginBottom: "20px" });
  $("#textWrp").animate({ top: "-=100px" });
  $("#textWrp").animate(
    {
      top: "+=50px",
      right: "+=80px",
      opacity: 100,
      fontSize: "1rem",
      deg: 0,
    },
    rotator
  );
  setTimeout(() => {
    $("h1").animate({ marginBottom: "-8px" });
  }, 900);
}

function slideUp() {
  $("#textWrp").animate(
    {
      top: "-=50px",
      right: "-=80px",
      opacity: 0,
      fontSize: "0.9rem",
      deg: -5,
    },
    rotator
  );
  $("h1").animate({ marginBottom: "20px" });
  $("#textWrp").animate({ top: "+=100px" });
  if (chosen != "featuredWork") {
    $("#textWrp").animate(
      {
        top: "-=50px",
        right: "+=80px",
        opacity: 100,
        fontSize: "1rem",
        deg: 0,
      },
      rotator
    );
    setTimeout(() => {
      $("h1").animate({ marginBottom: "-8px" });
    }, 900);
  }
}

function unHide() {
  $("#textWrp").animate(
    {
      top: "-=50px",
      right: "+=80px",
      opacity: 100,
      fontSize: "1rem",
      deg: 0,
    },
    rotator
  );
  $("h1").animate({ marginBottom: "-8px" });
}

const pulseElement = document.querySelector(".pulse");

pulseElement.addEventListener("mouseenter", () => {
  pulseElement.classList.add("pulse-hover");
});

pulseElement.addEventListener("mouseleave", () => {
  pulseElement.classList.remove("pulse-hover");
});
