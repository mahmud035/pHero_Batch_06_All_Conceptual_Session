const express = require('express');
const app = express();
require('colors');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and running`.cyan.blue);
});