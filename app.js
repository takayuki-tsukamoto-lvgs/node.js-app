// const main = () => {
//   console.log("hello node!");
// }

// main();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({message: "ok!"});
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));