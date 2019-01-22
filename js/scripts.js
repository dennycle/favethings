$(document).ready(function() {
  $("form#fave").submit(function(event) {
    var food = $("input#food").val();
    var movie = $("input#movie").val();
    var animal = $("input#animal").val();
    var color = $("input#color").val();
    var array = [food, animal, movie, color];
    var newarray = [];
    newarray.push(array[0], array[1], array[2]);

    $(".food").append(food);
    $(".animal").append(animal);
    $(".movie").append(movie);

    $("#results").show();

  event.preventDefault();
  });
});
