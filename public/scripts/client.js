/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#main').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

const createTweetElement = (tweet) => {
  const { user } = tweet;
  const { content } = tweet;
  const created_at = tweet.created_at;

  const tweetEle = $(
  `<article class="tweet">
    <header class="tweet-header">
      <div class="tweet-header-left">
        <img src="${ user.avatars }" />
        <div class="name">${ user.name }</div>
      </div>
      <div class="handle">${ user.handle }</div>
    </header>
    <p class="tweet-body">${ content.text }</p>
    <hr />
    <footer class="tweet-footer">
      <p>${ created_at }</p>
      <div class="icon-bar">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`);

  return tweetEle;
};
