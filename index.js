const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
  credentials: true
}));

app.get('/initalize', (req, res) => {
  res.json({
    msg: 'INITIALIZE',
    body: {
      newLine: null,
      heading: 'Player 1',
      message: "Awaiting Player 1's move"
    }
  });
});

app.post('/node-clicked', (req, res) => {
  res.json({
    msg: 'VALID_START_NODE',
    body: {
      newLine: null,
      message: null,
      heading: req.body.data.currentPlayer,
    }
  });
});

app.post('/invalid-start-node', (req, res) => {
  res.json({
    msg: "INVALID_START_NODE",
    body: {
      newLine: null,
      heading: req.body.data.currentPlayer,
      message: "Not a valid starting postion"
    }
  });
});

app.post('/valid-end-node', (req, res) => {
  res.json({
    msg: "VALID_END_NODE",
    body: {
      newLine: req.body.data.nodes,
      heading: req.body.data.currentPlayer,
      message: null
    }
  });
});

app.post('/invalid-end-node', (req, res) => {
  res.json({
    msg: 'INVALID_END_NODE',
    body: {
      newLine: null,
      heading: req.body.data.currentPlayer,
      message: "Invalid move!"
    }
  })
})

app.post('/game-over', (req, res) => {
  res.json({
    msg: "GAME_OVER",
    body: {
      newLine: req.body.data.nodes,
      heading: "Game Over",
      message: req.body.data.currentPlayer
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})