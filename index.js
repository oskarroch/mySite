$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

$("li").on("click", (e) => {
  const idClicked = e.target.id;
  $("#" + idClicked).addClass("chosen");
});
