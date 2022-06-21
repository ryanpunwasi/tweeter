$(document).ready(function() {
  const MAX_CHARS = 140;
  $("#tweet-text").on('input', function() {
    const counter = $(this).next().find("output");
    const charactersLeft = MAX_CHARS - this.value.length;
    if (charactersLeft < 0) {
      counter.addClass('red');
    } else if (counter.hasClass('red') && charactersLeft >= 0) {
      counter.removeClass('red');
    }
    counter.html(charactersLeft);
  });
});