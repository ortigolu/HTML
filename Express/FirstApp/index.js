const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   // res.send("Hello i got your request!");
//   //   res.send({ color: "red" });
//   //   res.send("<h1>This is my webpage!</h1>");
// });
app.get("/", (req, res) => {
  res.send("This is the home page!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("Post request to /cats!!!");
});

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.listen(8080, () => {
  console.log("Listening on port 3000");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("/*", (req, res) => {
  res.send("I dont know that path");
});
