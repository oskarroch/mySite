$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

$("#abtMe").on("click", () => {
  $("#circle").animate({ top: "54px" }, 1000);
});

$("#interests").on("click", () => {
  $("#circle").animate({ top: "140px" }, 1000);
});

$("#xp").on("click", () => {
  $("#circle").animate({ top: "226px" }, 1000);
});

$("#featuredWork").on("click", () => {
  $("#circle").animate({ top: "312px" }, 1000);
  $("#myWork").animate({ top: "35%" }, 1000);
});

$(window).on("load", () => {
  $(".cover").fadeOut(0);
});

$(window).on("load resize", () => {
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
  .on("click", () => {});

$("#simonSays")
  .on("mouseenter", () => {
    $(".ss").fadeIn(200);
  })
  .on("mouseleave", () => {
    $(".ss").fadeOut(200);
  });

$("#keeperApp")
  .on("mouseenter", () => {
    $(".ka").fadeIn(200);
  })
  .on("mouseleave", () => {
    $(".ka").fadeOut(200);
  });
