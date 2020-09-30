"use strict";

const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs").promises;
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

/*
 * Establishes a database connection to the wpl database and returns the database object.
 * Any errors that occur during connection should be caught in the function
 * that calls this one.
 * @returns {Object} - The database object for the connection.
 */
async function getDBConnection() {
    const db = await sqlite.open({
        filename: "posts.db",
        driver: sqlite3.Database,
    });

    return db;
}

app.use(multer().none());

app.get("/blogs", async function (req, res) {
    let posts = await getPosts();
    res.json(posts);
});

async function getPosts() {
    let db = await getDBConnection();
    let query = "SELECT * FROM posts;";
    let contents = await db.all(query);
    //let contents = await fs.readFile('posts.json', 'utf-8');
    return contents;
}

app.post("/post/new", async function (req, res) {
    let post = {
        title: req.body.title,
        body: req.body.post,
        time: new Date().toString(),
    };
    let posts = await getPosts();
    posts.push(post);
    await fs.writeFile("posts.json", JSON.stringify(posts));
    res.type("text").send("all good");
});

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
