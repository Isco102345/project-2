/// <reference types="../@types/jquery"/>

let cheefOffset = $(".CHEFS").offset().top;

$(window).on("scroll", function () {
  let userScroll = $(window).scrollTop();

  if (userScroll > cheefOffset - 20) {
    $(".nav").css({ backgroundColor: "tomato" });
  } else {
    $(".nav").css({ backgroundColor: "white" });
  }
});

$(".nav-link").on("click", function (e) {
  let sectionId = $(e.target).attr("href");

  let sectionOffset = $(sectionId).offset().top;
  $("html , body").animate({ scrollTop: sectionOffset }, 1500);
});

///////////////////////////////////////////////////////////

$(function () {
  $(".sk-chase").fadeOut(2000, function () {
    $(".Loading").slideUp(2000, function () {
      $("body").css({ overflow: "auto" });
    });
  });
});

///////////////////////////////////////////////////////////

let myColor = $(".box-color");

$(myColor).eq(0).css("backgroundColor", "red");
$(myColor).eq(1).css("backgroundColor", "green");
$(myColor).eq(2).css("backgroundColor", "#09c");
$(myColor).eq(3).css("backgroundColor", "yellow");
$(myColor).eq(4).css("backgroundColor", "blue");
$(myColor).eq(5).css("backgroundColor", "#ff206e");

$(myColor).on("click", function (e) {
  let color = $(e.target).css("backgroundColor");

  $("h1,h2,h3,h4,h5,h6,p,i").css({ cssText: `color : ${color} !important` });
});

$(".fa-gear").on("click", function () {
  $(".side").animate({ width: "toggle", paddingInline: "toggle" }, 2000);
});
