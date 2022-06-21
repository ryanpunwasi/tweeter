$(document).ready(function() {
  const MAX_CHARS = 140;

  // Event handling whenever the value of the element with id `tweet-text` changes
  $("#tweet-text").on('input', function() {

    // Traverse DOM to find counter. Start at the element with id `tweet-text`, move to it's next immediate sibling, then find the output element in said sibling
    const counter = $(this).next().find("output");

    // Update the number of characters left
    const charactersLeft = MAX_CHARS - this.value.length;

    // Change counter color to red if character limit is exceeded
    if (charactersLeft < 0) {
      counter.addClass('red');
    } else if (counter.hasClass('red') && charactersLeft >= 0) {
      counter.removeClass('red');
    }

    // Set inner text of counter to the number of characters left
    counter.html(charactersLeft);
  });
});