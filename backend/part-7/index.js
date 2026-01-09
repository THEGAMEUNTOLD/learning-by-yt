const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/* ---------------- HOME ROUTE ---------------- */
app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render("index", { files });
    });
});

/* ---------------- CREATE NOTE ---------------- */
app.post('/create', function (req, res) {
    const fileName = req.body.Title.split(' ').join('');
    fs.writeFile(`./files/${fileName}.txt`, req.body.details, function () {
        res.redirect("/");
    });
});

/* ---------------- READ NOTE ---------------- */
app.get('/read/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render("read", {
            title: req.params.filename,
            content: data
        });
    });
});

/* ---------------- DELETE NOTE ---------------- */
app.get('/delete/:filename', function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function () {
        res.redirect("/");
    });
});

app.listen(3000);
