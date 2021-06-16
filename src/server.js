import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send("wow");
});

app.get("/login", (req, res)=>{
  return res.send("login")
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} ✈`);
});


