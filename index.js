$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

$(window).on("load resize", function () {
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
