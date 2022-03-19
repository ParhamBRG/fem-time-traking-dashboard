$(document).ready(function () {

  const mode = localStorage.getItem("mode");


  let work ;
  let play ;
  let study ;
  let exercise ;
  let social ;
  let selfcare ;

  // FETCHING DATA FROM JSON FILE
  $.getJSON("data.json", 
          function (data) {
            work = data[0];
            play = data[1];
            study = data[2];
            exercise = data[3];
            social = data[4];
            selfcare = data[5];
  });

  $(".card__ellipsis").hover(
    function () {
      $(".card").css("background" , "var(--dark_blue)");
      console.log("Hover")
    }, function() {
      $(".card" ).css("background" , "");
      console.log("Leave Hover")
    }
  );


  $( "#Daily" ).click(function() {
    localStorage.setItem("mode","d");
    $("#Daily").css("color" , "#fff");
    $("#Weekly").css("color" , "");
    $("#Monthly").css("color" , "");

    $(".card--work").children(".card__previous").text('Last Day'+ " - " + work.timeframes.daily.previous + "hrs");
    $(".card--play").children(".card__previous").text('Last Day '+ " - " + play.timeframes.daily.previous + "hrs");
    $(".card--study").children(".card__previous").text('Last Day'+ " - " + study.timeframes.daily.previous + "hrs");
    $(".card--exercise").children(".card__previous").text('Last Day'+ " - " + exercise.timeframes.daily.previous + "hrs");
    $(".card--social").children(".card__previous").text('Last Day'+ " - " + social.timeframes.daily.previous + "hrs");
    $(".card--selfcare").children(".card__previous").text('Last Day'+ " - " + selfcare.timeframes.daily.previous + "hrs");

    $(".card--work").children(".card__time").text(work.timeframes.daily.current + "hrs");
    $(".card--play").children(".card__time").text(play.timeframes.daily.current + "hrs");
    $(".card--study").children(".card__time").text(study.timeframes.daily.current + "hrs");
    $(".card--exercise").children(".card__time").text(exercise.timeframes.daily.current + "hrs");
    $(".card--social").children(".card__time").text(social.timeframes.daily.current + "hrs");
    $(".card--selfcare").children(".card__time").text(selfcare.timeframes.daily.current + "hrs");
  });

  $( "#Weekly" ).click(function() {
    localStorage.setItem("mode","w");
    $("#Daily").css("color" , "");
    $("#Weekly").css("color" , "#fff");
    $("#Monthly").css("color" , "");

    $(".card--work").children(".card__previous").text('Last Week'+ " - " + work.timeframes.weekly.previous + "hrs");
    $(".card--play").children(".card__previous").text('Last Week'+ " - " + play.timeframes.weekly.previous + "hrs");
    $(".card--study").children(".card__previous").text('Last Week'+ " - " + study.timeframes.weekly.previous + "hrs");
    $(".card--exercise").children(".card__previous").text('Last Week'+ " - " + exercise.timeframes.weekly.previous + "hrs");
    $(".card--social").children(".card__previous").text('Last Week'+ " - " + social.timeframes.weekly.previous + "hrs");
    $(".card--selfcare").children(".card__previous").text('Last Week'+ " - " + selfcare.timeframes.weekly.previous + "hrs");

    $(".card--work").children(".card__time").text(work.timeframes.weekly.current + "hrs");
    $(".card--play").children(".card__time").text(play.timeframes.weekly.current + "hrs");
    $(".card--study").children(".card__time").text(study.timeframes.weekly.current + "hrs");
    $(".card--exercise").children(".card__time").text(exercise.timeframes.weekly.current + "hrs");
    $(".card--social").children(".card__time").text(social.timeframes.weekly.current + "hrs");
    $(".card--selfcare").children(".card__time").text(selfcare.timeframes.weekly.current + "hrs");
  });

  $( "#Monthly" ).click(function() {
    localStorage.setItem("mode","m");
    $("#Daily").css("color" , "");
    $("#Weekly").css("color" , "");
    $("#Monthly").css("color" , "#fff");

    $(".card--work").children(".card__previous").text('Last Month'+ " - " + work.timeframes.monthly.previous + "hrs");
    $(".card--play").children(".card__previous").text('Last Month'+ " - " + play.timeframes.monthly.previous + "hrs");
    $(".card--study").children(".card__previous").text('Last Month'+ " - " + study.timeframes.monthly.previous + "hrs");
    $(".card--exercise").children(".card__previous").text('Last Month'+ " - " + exercise.timeframes.monthly.previous + "hrs");
    $(".card--social").children(".card__previous").text('Last Month'+ " - " + social.timeframes.monthly.previous + "hrs");
    $(".card--selfcare").children(".card__previous").text('Last Month'+ " - " + selfcare.timeframes.monthly.previous + "hrs");

    $(".card--work").children(".card__time").text(work.timeframes.monthly.current + "hrs");
    $(".card--play").children(".card__time").text(play.timeframes.monthly.current + "hrs");
    $(".card--study").children(".card__time").text(study.timeframes.monthly.current + "hrs");
    $(".card--exercise").children(".card__time").text(exercise.timeframes.monthly.current + "hrs");
    $(".card--social").children(".card__time").text(social.timeframes.monthly.current + "hrs");
    $(".card--selfcare").children(".card__time").text(selfcare.timeframes.monthly.current + "hrs");
  });

  switch (mode) {
    case 'd':
      $("#Daily").trigger("click");
      break;
    case 'w':
      $("#Weekly").trigger("click");
      break;
    case 'm':
      $("#Monthly").trigger("click");
      break;
    default:
      $("#Weekly").trigger("click");
      break;
  }

});