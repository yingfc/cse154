"use strict";
const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

app.get("/test/:id/:address", function (request, response) {
    response.type("text").send(request.params.id);
});

app.get("/data", function (request, response) {
    console.log(request.query);
    response.json({ data: [1, 2, 3] });
});

app.post("/contact", function (request, response) {
    try {
        if (request.body.name) {
            response.type("text").send("Hello: " + request.body.name);
        } else {
            response.status(400).send("no good");
        }
    } catch (error) {
        response.status(500).send("my bad");
    }
});

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
