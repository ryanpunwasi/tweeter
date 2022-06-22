const validateTweetSubmission = input => {
  // Assign relevent error message/boolean based on value of input
  let error = 
  !input ? 'Please enter some text.' :
  input.length > 140 ? 'Your tweet must be less than 140 characters.' :
  false;

  return error;
};