/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  const { user } = tweet; // User information
  const { text } = tweet.content; // Tweet text
  const createdAt = tweet.created_at; // Date (in milliseconds) that the tweet was created

  // HTML template for tweet
  const tweetEle =
  $(
    `<article class="tweet">
      <header class="tweet-header">
        <div class="tweet-header-left">
          <img src="${ user.avatars }" />
          <div class="name">${ user.name }</div>
        </div>
        <div class="handle">${ user.handle }</div>
      </header>
      <p class="tweet-body">${ text }</p>
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
    $('#main').append(tweetElement);
  });
};

// Test / driver code (temporary). Eventually will get this from the server.

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(function() {
  renderTweets(data);
});
