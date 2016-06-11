$(document).ready(function() {
  console.log("Loaded, bro.");
});

// Add an event to OPEN the modal
$(".open-modal").on("click", function() {
  console.log("You clicked the open button!");
  $(".modal").toggle();
});

// Add an event to CLOSE the modal
$(".close-modal").on("click", function() {
  console.log("You clicked the close button.");
  $(".modal").toggle();
});
