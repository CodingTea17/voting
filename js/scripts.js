$(document).ready(function() {
  $("form#votingBallot").submit(function(event) {
    event.preventDefault();

    var age = parseInt($("#userAge").val());
    if (age>=18) {
      $("#over18").show();
    } else {
      $("#under18").show();
    }
  });
});
