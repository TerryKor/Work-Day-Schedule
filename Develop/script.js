$(function () {
  let descriptionEl = document.getElementsByClassName("description")
  
  let mainContainer = document.getElementById("mainContainer")
  // jQuery checking current format for the day
  $('#currentDay').html(moment().format('MMMM Do YYYY HH:mm'));
  
});
