const validateTweetSubmission = input => {
  // Assign relevent error message/boolean based on value of input
  let error =
  !input ? 'Please enter some text.' :
  input.length > 140 ? 'Your tweet must be 140 characters or less.' :
  false;

  return error;
};