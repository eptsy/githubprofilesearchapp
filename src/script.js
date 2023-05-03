// ---------------------------------
// LIGHTMODE
// ---------------------------------
function dark() {
  var element = document.body;
  element.classList.toggle("light-mode");
  let key = "git: theme";
  let data;
  if (element.classList.contains("light-mode")) {
    data = "dark";
  } else {
    data = "light";
  }
  localStorage.setItem(key, data);
}
if (localStorage.getItem("git: theme") === "dark") {
  document.body.classList.toggle("light-mode");
}
// ---------------------------------
// GITHUB
// ---------------------------------
document.getElementById("git__form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("git__result").style.display = "grid";
  let username = document.getElementById("git__input").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      document.getElementById("pfp").src = data["avatar_url"];
      document.getElementById("git__name").innerText = data["name"];
      document.getElementById("git__username").innerText = "@" + data["login"];
      document.getElementById("git__username").href = data["html_url"];
      document.getElementById("git__website").href = "https://" + data["blog"];
      document.getElementById("git__website").innerHTML = data["blog"];
      document.getElementById("git__bio").innerText = data["bio"];
      document.getElementById("git__org").innerText = data["company"];
      document.getElementById("git__followers").innerText = data["followers"];
      document.getElementById("git__following").innerText = data["following"];
      document.getElementById("git__repo").innerText = data["public_repos"];
      document.getElementById("git__joined").innerText = data["created_at"];
      document.getElementById("git__location").innerText = data["location"];
      document.getElementById("git__twitter").innerText =
        "@" + data["twitter_username"];
      document.getElementById("git__twitter").href =
        "https://twitter.com/" + data["twitter_username"];
    });
});
