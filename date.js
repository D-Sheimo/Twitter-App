const allTweets = document.getElementById("allTweets");

const allTweetsArray = [
  ...users.user1.tweets.map(tweet => ({
    ...tweet,
    displayName: users.user1.displayName,
  })),
  ...users.user2.tweets.map(tweet => ({
    ...tweet,
    displayName: users.user2.displayName,
  })),
];

const sortedTweets = allTweetsArray.sort(
  (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
);

const timelineHTML = `
    <div class="finalCont">
        <h2>Tweets Timeline</h2>
    </div>

    ${sortedTweets
      .map(
        tweet => `
        <div class="tweet">
            <h2 class="name-date">${tweet.displayName}</h2>
            <p class="tweet-text">'${tweet.text}'</p>
            <p class="timestamp">${tweet.timestamp.split(" ")[0]}</p>
        </div>
       
    `
      )
      .join("")}

    <button class="newPage-btn" onclick="location.href='index.html?user=user1'">Back</button>
`;

allTweets.innerHTML = `<div>${timelineHTML}</div>`;
