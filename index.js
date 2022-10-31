$("document").ready(() => {
  $("#abtMeDot").addClass("chosen");
});

$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

$("#abtMe").on("click", () => {
  $("#circle").animate({ top: "51px" });
});

$("#featuredWork").on("click", () => {
  $("#circle").animate({ top: "134px" });
});

$("#xp").on("click", () => {
  $("#circle").animate({ top: "217px" });
});

$("#interests").on("click", () => {
  $("#circle").animate({ top: "300px" });
});
