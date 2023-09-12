import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("graphql running");
});

const PORT = 4040;
app.listen(PORT, () => console.log(`Graphql is running on http://localhost:${PORT}/graphql`));
