const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "fatimahsani1026@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/dWanderingSoul/HNG-12-backend-stage-0-nodejs",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
