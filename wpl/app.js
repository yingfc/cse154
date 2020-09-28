"use strict";
const express = require("express");
const app = express();
const multer = require("multer");

app.use(multer().none());

// Part 1: Add an endpoint for the queue
// 1.1 - What kind of endpoint?
// 1.2 - Do we need additional modules to handle this request?
app.post("/addItem", function (req, res) {
    let name = req.body.name;
    let sid = req.body.sid;
    let question = req.body.question;
    if (name && sid && question) {
    } else {
    }
});

// Part 2: Access the necessary data from the request

// Part 3: Add student to some sort of server side storage (Will do on Wednesday)
// 3.1 - For now, just console.log

// Part 4: Add error handling
// 4.1 - Handle 400
// 4.2 - Handle 500

/* Adds student to some kind of storage */
function addStudent(name, id, question) {
    // For now, just log to the console
    console.log("Student added: ", name, id, question);
}

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
