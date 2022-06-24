const renderError = (errorText, ele) => {
/**
 * (string, JQuery object) => undefined
 * Toggles animation for error element (ele) and sets text of error element to value of errorText
 */

  // If previous error message is open, close it and update error message
  ele.slideUp(() => {
    ele.text(errorText);
  });

  // Show error
  if (errorText) {
    ele.slideDown();
  }
};