let chosen = "aboutMe";

$("#abtMe").on("click", () => {
  $("#circle").animate({ top: "54px" }, 1000);
});

$("#interests").on("click", () => {
  $("#circle").animate({ top: "140px" }, 1000);
  chosen === "aboutMe" ? null : null;
});

$("#xp").on("click", () => {
  $("#circle").animate({ top: "226px" }, 1000);
});

$("#featuredWork").on("click", () => {
  $("#circle").animate({ top: "312px" }, 1000);
  $("#myWork").animate({ top: "35%" }, 1000);
});

$(window).on("load resize", () => {
  $(".cover").fadeOut(0);
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
  $("#myWork").animate({ top: "110%" }, 1000);
  $("#circle").animate({ top: "54px" }, 1000);
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

const rotator = {
  duration: 500,
  step: function (now) {
    $(this).css({ transform: "rotate(" + now + "deg)" });
  },
};

function slideDown() {
  $("#textWrp").animate(
    {
      top: "+=50px",
      right: "-=40px",
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
      right: "+=40px",
      opacity: 100,
      fontSize: "1rem",
      deg: 0,
    },
    rotator
  );
  setTimeout(() => {
    $("h1").animate({ marginBottom: "-5px" });
  }, 900);
}

function slideUp() {
  $("#textWrp").animate(
    {
      top: "-=50px",
      right: "-=40px",
      opacity: 0,
      fontSize: "0.9rem",
      deg: 5,
    },
    rotator
  );
  $("h1").animate({ marginBottom: "20px" });
  $("#textWrp").animate({ top: "+=100px" });
  $("#textWrp").animate(
    {
      top: "-=50px",
      right: "+=40px",
      opacity: 100,
      fontSize: "1rem",
      deg: 0,
    },
    rotator
  );
  setTimeout(() => {
    $("h1").animate({ marginBottom: "-5px" });
  }, 900);
}
