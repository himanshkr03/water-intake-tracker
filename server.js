const express = require('express');
const webPush = require('web-push');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
