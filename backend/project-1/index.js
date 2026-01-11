const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');

app.set("view engine", "ejs");

// middlewares
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
            title: req.params.filename.replace('.txt', ''),
            content: data
        });
    });
});

/* ---------------- EDIT NOTE (OPEN FORM) ---------------- */
app.get('/edit/:filename', function (req, res) {
    const filename = req.params.filename;

    fs.readFile(`./files/${filename}`, 'utf-8', function (err, data) {
        res.render('edit', {
            oldTitle: filename.replace('.txt', ''),
            content: data,
            filename: filename
        });
    });
});

/* ---------------- UPDATE NOTE (TITLE + CONTENT) ---------------- */
app.post('/update/:filename', function (req, res) {
    const oldFilename = req.params.filename;
    const newTitle = req.body.title.split(' ').join('');
    const newFilename = newTitle + '.txt';
    const newContent = req.body.details;

    // If title changed → rename + update
    if (oldFilename !== newFilename) {
        fs.rename(
            `./files/${oldFilename}`,
            `./files/${newFilename}`,
            function () {
                fs.writeFile(
                    `./files/${newFilename}`,
                    newContent,
                    function () {
                        res.redirect('/');
                    }
                );
            }
        );
    }
    // If title not changed → only update content
    else {
        fs.writeFile(
            `./files/${oldFilename}`,
            newContent,
            function () {
                res.redirect('/');
            }
        );
    }
});

/* ---------------- DELETE NOTE ---------------- */
app.get('/delete/:filename', function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function () {
        res.redirect("/");
    });
});

/* ---------------- SERVER ---------------- */
app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
