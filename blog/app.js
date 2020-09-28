'use strict';

const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs').promises;

app.use(multer().none());

app.get('/blogs', async function(req, res) {
    let posts = await getPosts();
    res.json(posts);
});

async function getPosts() {
  let contents = await fs.readFile('posts.json', 'utf-8');
  return JSON.parse(contents);
}

app.post('/post/new', async function(req, res) {
  let post = {title: req.body.title, body: req.body.post, time: (new Date()).toString()};
  let posts = await getPosts();
  posts.push(post);
  await fs.writeFile('posts.json', JSON.stringify(posts));
  res.type('text').send('Doing nothing!');
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
