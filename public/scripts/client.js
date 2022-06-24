const createTweetElement = (tweet) => {
  /**
   * (object) => JQuery object
   * Returns a JQuery element object that consists of the `name`, `handle`, `avatars`, `text` and 
   * `created_at` properties in tweet embedded in a HTML template.
  */

  const { name, handle, avatars } = tweet.user || {}; // User information
  const { text } = tweet.content || {}; // Tweet text
  const createdAt = timeago.format(tweet.created_at) || null; // Time ago that the tweet was created

  // HTML template for tweet
  const tweetEle =
  $(
    `<article class="tweet">
      <header class="tweet-header">
        <div class="tweet-header-left">
          <img src="${ avatars }" alt="avatar"/>
          <div class="name">${ name || '' }</div>
        </div>
        <div class="handle">${ handle || '' }</div>
      </header>
      <p class="tweet-body">${ renderEscapedText(text) /* Escape text */}</p>
      <hr />
      <footer class="tweet-footer">
        <p>${ createdAt }</p>
        <div class="icon-bar">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`
  );

  return tweetEle;
};

const renderTweets = tweets => {
  /**
   * (object) => undefined
   * Create a JQuery element object consisting of all the tweets in tweets and append it to #main
   */

  $('#tweets-container').remove(); // Remove existing tweet container
  const listOfTweets = $('<section id="tweets-container">'); // Create new tweets container

  // Build list of tweets and add them to container
  tweets.forEach(tweet => {
    const tweetElement = createTweetElement(tweet);
    listOfTweets.append(tweetElement);
  });
  listOfTweets.append("</section>");

  $('#main').append(listOfTweets); // Append to DOM
};

const loadTweets = () => {
  /**
   * () => undefined
   * Make GET request to /tweets endpoint and render data on success. If request is unsuccessful, render error.
   */
  const errorElement = $('.general-error');

  // Make AJAX GET request to /tweets
  $.ajax('/tweets', {
    method: 'GET',
    error: (e) => renderError(`Unable to load tweets (${e.status})`, errorElement) // Render error if request fails
  })
  .done(function(data) {
    renderTweets(data); // Render tweets once they are fetched
  });
};

$(document).ready(function() {

  // Attach handler that toggles form when new tweet button is clicked
  $("#compose").click(function() {
    toggleForm();
  });

  // Handle form submission
  $(".new-tweet form").submit(function(event) {

    event.preventDefault(); // Prevent default behaviour
    const tweetValue = $(this).find('#tweet-text').val(); // Extract textarea value
    const error = validateTweetSubmission(tweetValue); // Store error text if validation fails, empty string if no error present
    const errorElement = $('.validate-error'); // Get error element

    renderError(error, errorElement);
    if (error) {
      return; // Prevent data from being POSTed
    }

    const serializedData = $(this).serialize(); // Serialize form data

    // Make AJAX POST request to /tweets. Update tweets and clear form on sucessful submission
    $.ajax('/tweets', {
      method: 'POST',
      data: serializedData,
      success: [
        loadTweets,
        () => {
          $(this).find('#tweet-text').val('').trigger("input"); // Clear form and trigger input event to reset character counter
        }
      ],
      error: () => renderError("Something went wrong...", errorElement) // Render error is request fails
    });
  });

  // Fetch tweets
  loadTweets();
});
