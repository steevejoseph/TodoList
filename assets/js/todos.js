// Check off clicked to-do
// @Steeve: peep the syntax
// Originally, it was:
//   $('li').on('click', function()
// But, in order to add listeners for elements not yet created,
//  The listener had to be on the entire ul
//    * we must first have a listener for something on the page
//    * after all, if there's nothing there at runtime,
//        there's nothing to be listened on.
// Bezicly, the line below says "listen on the ul, but only run
//   the funtion if an li is clicked."
// So only check off the todo if the li (repping the todo) is clicked.

$('ul').on('click', 'li', function(){

  // .completed includes a grey text and linethrough
  $(this).toggleClass("completed");
});

// Delete to-do when X'ed out, see note at v beginning on 3 arg explanation
$('ul').on('click', 'span',function(event) {

  // @Steeve: Add this method to JuNo
  // Stops event bubbling
  // eg, if there's an event on an li and a ul:
  //  stopPropogation() makes it so event only fires
  //  on the li, and not the ul (or body, or whatever).
  event.stopPropagation();

  // @ Steeve: tad bit slippery:
  // $(this).parent() === the span's (where the X is) parent (the li)
  // pass fadeOut() an anonymous callback function so removal
  //  happens after the fadeOut
  $(this).parent().fadeOut(1000, function(){

    /// $(this).remove() === the li to be removed.
    $(this).remove();
  });
});

$("input[type='text']").keypress(function(event){

 // If user presses Enter
  if (event.which === 13) {
    // Grab the new todo text from the input
    var todoText = $(this).val();

    // Create new li, and append it to the ul.
    // @Steeve, append() takes in an HTML string.
    $('#listOfTodos').append("<li><span><i class='fa fa-trash'></i> </span> " + todoText + "</li>");

    // Clear input
    $(this).val("");


  }

});

$('.fa-plus').on('click', function(){
  $("input[type='text']").fadeToggle();
});
