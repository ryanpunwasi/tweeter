const toggleForm = () => {
  /**
   * () => undefined
   * Helper function to toggle form
   */
  const formSection = $(".new-tweet"); // Select section containing form
  const textarea = $(formSection).find('#tweet-text'); // Select textarea in form
  
  $(formSection).slideToggle(() => {
    if (formSection.css("display") !== "none") { // Only focus when form is being shown
      textarea.focus();
    }
  });
};