const renderError = (errorText, ele) => {
/**
 * Toggles animation for error element (ele) and sets text of error element to value of errorText
 */

  // If previous error message is open, close it and update error message
  ele.slideUp(() => {
    ele.text(errorText);
  });

  // Show error
  if (error) {
    ele.slideDown();
  }
};