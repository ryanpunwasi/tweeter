const renderError = (error) => {
  const errorElement = $('.error'); // Get error element

  // If previous error message is open, close it and update error message
  errorElement.slideUp(() => {
    errorElement.text(error);
  });

  // Show error
  if (error) {
    errorElement.slideDown();
  }
};