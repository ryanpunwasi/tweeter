/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  const { name, handle, avatars } = tweet.user || {}; // User information
  const { text } = tweet.content || {}; // Tweet text
  const createdAt = tweet.created_at || null; // Date (in milliseconds) that the tweet was created

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
        <p>${ timeago.format(createdAt) }</p>
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
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    $.ajax('/tweets', { 
      method: 'POST',
      data: serializedData 
    });
  });

  const loadTweets = () => {
    $.ajax('/tweets', { 
      method: 'GET'
    })
    .done(function(data) {
      renderTweets(data);
    });
  };

  loadTweets();
});
