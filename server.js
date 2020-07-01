const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB CONFIG
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// we are going to use async here to log conosole ( using a js promises

mongoose
  .connect(db)
  // Here we output text to the conole in order to know that the web app has connected to MongoDB
  .then(() => console.log("MongoDB is connected "))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Moloweni'));

// Use Routes

app.use('./api/users',users);
app.use('./api/profile',profile);
app.use('./api/post',posts);

const port = process.env.PORT || 5000;

DeveloperName = "Xola dos Santos";

app.listen(port, () => console.log('Hi ' + DeveloperName + ', Server is running on port: ' + port + ' :-) '));