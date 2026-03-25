const express = require("express");
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

const startServer = () => {
  const server = app.listen(PORT, () => {
console.log(`Server is responding at http://localhost:${PORT}`);
  });

  server.on('error', (error) => {
    console.log("Server Error Occurred!", error.message);
  });
};

startServer();