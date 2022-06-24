const validateTweetSubmission = input => {
/* (string) => string
Return a string with error message if input is empty or greater than 140 characters long. Otherwise, return an empty string.
*/ 
  let error =
  !input ? 'Please enter some text.' 
  : input.length > 140 ? 'Your tweet must be 140 characters or less.' 
  : '';

  return error;
};