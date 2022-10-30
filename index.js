$("document").ready(() => {
  $("#abtMeDot").addClass("chosen");
});

$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

const lis = $("#abtMeDot, #featuredWorkDot, #xpDot, #interestsDot");
$("#abtMe, #featuredWork, #xp, #interests").on("click", (e) => {
  const idClicked = e.target.id;
  for (i = 0; i < lis.length; i++) {
    $(lis[i]).removeClass("chosen");
  }
  $("#" + idClicked + "Dot").addClass("chosen");
});
