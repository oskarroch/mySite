$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

const lis = $("#abtMe, #featuredWork, #xp, #interests");
lis.on("click", (e) => {
  const idClicked = e.target.id;
  for (i = 0; i < lis.length; i++) {
    $(lis[i]).removeClass("chosen");
  }
  $("#" + idClicked).addClass("chosen");
});
