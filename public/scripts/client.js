const createTweetElement = (tweet) => {
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
      <p class="tweet-body">${ text || '' }</p>
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
  
  // Create HTML template for each tweet and append it to #main
  tweets.forEach(tweet => {
    const tweetElement = createTweetElement(tweet);
    $('#tweets-container').append(tweetElement);
  });
};

$(document).ready(function() {

  // Send POST request asynchronously to /tweets on submission
  $(".new-tweet form").submit(function(event) {
    event.preventDefault(); // Prevent default behaviour
    const tweetValue = $(this).find('#tweet-text').val(); // Extract textarea value

    // Alert and prevent form submission if error present
    const error = validateTweetSubmission(tweetValue);
    if (error) {
      alert(error);
      return;
    }

    const serializedData = $(this).serialize(); // Serialize form data

    // Make AJAX POST request to /tweets. Update tweets and clear form on sucessful submission
    $.ajax('/tweets', { 
      method: 'POST',
      data: serializedData,
      success: [
        loadTweets,
        () => { $(this).find('#tweet-text').val('').trigger("input") } // Clear form and trigger input event to reset character counter
      ]
    });
  });

  const loadTweets = () => {

    // Make AJAX GET request to /tweets
    $.ajax('/tweets', { 
      method: 'GET'
    })
    .done(function(data) {
      renderTweets(data); // Render tweets once they are fetched
    });
  };

  loadTweets();
});
