const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log('Server is running:', Port);
});
