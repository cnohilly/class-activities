const express = require('express');

const PORT = 3001;

const app = express();

function print_message(res,req){
  console.log(`${req.method} request for ${req.originalUrl} has been received.`);
  res.send(`${req.method} request for ${req.originalUrl} has been received.`);
}

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  print_message(res,req);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req,res) => {
  print_message(res,req);
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  print_message(res,req);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  // Your code here
  print_message(res,req);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
