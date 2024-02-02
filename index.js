const users = {
  user1: {
    userName: "@elonmusk",
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "elonmusk.jpg",
    coverPhotoURL: "elonmusk-cover.jpeg",
    tweets: [
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
  user2: {
    userName: "@BillGates",
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "billgates.jpg",
    coverPhotoURL: "billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const selectedUser = urlParams.get("user") || "user1";
const user = users[selectedUser];






if (user) {
  const container = document.getElementById("container");
  const header = document.getElementById("header");
  const cover = document.getElementById("cover");
  const profile = document.getElementById("profile");
  const tweetsContainer = document.getElementById("tweets");
  const tweetsTimeline = document.getElementById("timeline");

  const displayName = user.displayName;
  const totalTweets = user.tweets.length;
  const userName = user.userName;
  const joinedDate = user.joinedDate;
  const followingCount = user.followingCount;
  const followerCount = user.followerCount;

  function formatNumber(number) {
    const million = 1000000;
    if (number >= million) {
      return (number / million).toFixed(1) + "M";
    }
    return number;
  }

  header.innerHTML = `<div class="topName">
        <p class="backBtn"><a href="https://twitter.com/${userName}" target="_blank"><img src="backArrow.png" alt="Back"></a></p>
        <h2 class="name">${displayName}</h2>
        <p class="checkMark"> <img src="xLogo.png" alt="xLogo"></p>
    </div>
    <div class="tweetCnt">
        ${totalTweets} Tweets
    </div>`;

  cover.innerHTML = `<div>
        <img src="${user.coverPhotoURL}" class="space">
        <div class="rocketImg">
            <div class="circleBox">
                <div class="circleImg">
                    <img src="${user.avatarURL}" alt="rocket">
                </div>
            </div>
        </div>
    </div>`;

  profile.innerHTML = `<div class="profileUser">
        <div class="followBtn">
            <a href="https://twitter.com/${userName}" target="_blank">
                <button class="follow">Following</button>
            </a>
        </div>
        <div class="mainName">
            <h2 class="eName">${displayName}</h2>
            <p class="checkMark"> <img src="xLogo.png" alt="xLogo"></p>
        </div>
        <p class="userName">${userName}</p>
        <div class="calenderDiv">
            <img src="calendar-icon-free-vector.jpg" class="calender"></img>
            <p class="joinedDate">Joined ${joinedDate}</p>
        </div>
        <div class="followCnt">
            <h4>
                <span style="color: black;">${formatNumber(
                  followingCount
                )}</span> <span style="font-weight: 500;">Following</span>
            </h4>
            <h4>
                <span style="color: black;">${formatNumber(
                  followerCount
                )}</span> <span style="font-weight: 500;">Followers</span>
            </h4>
        </div>
    </div>`;

  tweetsContainer.innerHTML = `
        <div class="tweetsContainer">
            <a href="">
                <h5 class="titleName">Tweets</h5>
            </a>
            <a href="https://twitter.com/${userName}/with_replies">
                <h5 class="titleName">Tweets & replies</h5>
            </a>
            <a href="https://twitter.com/${userName}/media">
                <h5 class="titleName">Media</h5>
            </a>
            <a href="https://twitter.com/${userName}/likes">
                <h5 class="titleName">Likes</h5>
            </a>
        </div>`;

  const tweetTexts = user.tweets.map(tweet => tweet.text);

  for (let i = 0; i < user.tweets.length; i++) {
    tweetsContainer.innerHTML += `
            <div class="mainName-1">
                <p class="userInfo-1">
                    <img src="${user.avatarURL}" class="smallPic">
                    <span class="eName-1">${displayName}</span>
                    <img src="xLogo.png" alt="xLogo" class="checkMark-1">
                    <span class="userName-1">${userName}</span>
                    <span><img src="dot-icon.png" class="dot"></span>
                    <span class="date">${
                      user.tweets[i].timestamp.split(" ")[0]
                    }</span>
                </p>
                <h3 class="tweetRow">${tweetTexts[i]}</h3>
            </div>`;
  }
  tweetsContainer.innerHTML += "</div>";

  const userButton = document.getElementById("userButton");

  tweetsTimeline.innerHTML = `<div class="timeline-date">
    <div class="datebtn">
        <button id="userButton" class="newPage-btn" onclick="location.href='${
          selectedUser === "user1"
            ? "index.html?user=user2"
            : "index.html?user=user1"
        }'">${selectedUser === "user1" ? "Bill Gates" : "Elon Musk"}</button>
        <button class="newPage-btn" onclick="location.href='timeline.html'">Tweets Timeline</button>
    </div>
</div>`;
}
