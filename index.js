$("document").ready(() => {
  $("#abtMeDot").addClass("chosen");
});

$("#contactMe").on("click", () => {
  var link = "mailto:oskarrochowiak@gmail.com";
  window.location.href = link;
});

$("#abtMe").on("click", () => {
  $("#circle").animate({ top: "51px" }, 1000);
});

$("#featuredWork").on("click", () => {
  $("#circle").animate({ top: "134px" }, 1000);
});

$("#xp").on("click", () => {
  $("#circle").animate({ top: "217px" }, 1000);
});

$("#interests").on("click", () => {
  $("#circle").animate({ top: "300px" }, 1000);
});

function myFunction(x) {
  if (x.matches) {
    $("#nav").css({ width: "1px" });
  } else {
    $("#nav").css({ width: "170px" });
  }
}

var x = window.matchMedia("(max-width: 750px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
