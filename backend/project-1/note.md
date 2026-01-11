#  Building a Notes Taking Web App
### (Node.js + Express + EJS + File System)

## STEP 1: Decide the Goal of the Project

I decided to build a Notes Taking Web Application to understand real backend workflows.

### The application should be able to:

* Take title and description from the user
* Save notes on the server
* Show all saved notes
* Open a note in read-only mode
* Edit both title and content
* Delete a note

## STEP 2: Technologies Used

For learning backend fundamentals, I used:

* Node.js → runtime environment
* Express.js → backend framework
* EJS → server-side templating
* File System (fs) → storage
* Tailwind CSS (CDN) → styling
* Nodemon → development auto-reload

## STEP 3: Create Project Folder

```
learning-subject-by-yt/backend/nodejs/part-7
```

This folder contains:

* Backend logic
* Views
* Static assets
* Notes storage

---

## STEP 4: Initialize Node.js Project

```bash
npm init -y
```

### Purpose of `package.json`

* Stores project metadata
* Manages dependencies
* Makes the project runnable and shareable

---

## STEP 5: Install Required Packages

### Install Express

```bash
npm i express
```

Used for:

* Server creation
* Routing
* Handling requests & responses

---

### Install EJS

```bash
npm i ejs
```

Used because:

* HTML alone cannot handle backend data
* EJS allows JavaScript inside HTML
* Enables server-side rendering

---

### Install Nodemon (Development Tool)

```bash
npm install -g nodemon
```

Automatically restarts the server when code changes.

---

## STEP 6: Project Folder Structure

```
part-7
├── index.js
├── files
│   └── (all notes stored as .txt)
├── views
│   ├── index.ejs
│   ├── read.ejs
│   └── edit.ejs
└── public
    ├── images
    └── javascripts
```

### Folder Purpose

| Folder     | Purpose                |
| ---------- | ---------------------- |
| `index.js` | Main backend server    |
| `files`    | Stores notes as `.txt` |
| `views`    | EJS templates          |
| `public`   | Static files           |

---

## STEP 7: Create Express Server (`index.js`)

```js
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
```

---

## STEP 8: Configure App Settings

```js
app.set("view engine", "ejs");
```

This tells Express to use EJS for rendering views.

---

## STEP 9: Add Middleware

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
```

### What Middleware Does:

* Parses JSON data
* Parses form data
* Makes `public` folder accessible in browser

---

## STEP 10: Home Route – Show All Notes (`GET /`)

```js
app.get("/", function (req, res) {
    fs.readdir("./files", function (err, files) {
        res.render("index", { files });
    });
});
```

### Explanation:

* Reads all files from `files` folder
* Each file = one note
* Passes notes list to `index.ejs`

---

## STEP 11: Create Note Form (`index.ejs`)

The home page contains a form:

```html
<form action="/create" method="post">
    <input name="Title" placeholder="Note Title">
    <textarea name="details" placeholder="Write your note"></textarea>
    <button>Create Note</button>
</form>
```

User can:

* Enter title
* Enter note content
* Submit note

---

## STEP 12: Create Note Route (`POST /create`)

```js
app.post("/create", function (req, res) {
    const fileName = req.body.Title.split(" ").join("");
    fs.writeFile(`./files/${fileName}.txt`, req.body.details, function () {
        res.redirect("/");
    });
});
```

### Explanation:

* Reads form data from `req.body`
* Converts title into filename
* Saves content inside `.txt` file
* Redirects back to home

---

## STEP 13: Display Notes List (EJS Logic)

```ejs
<% files.forEach(function(file){ %>
    <h2><%= file %></h2>
    <a href="/read/<%= file %>">Read</a>
    <a href="/delete/<%= file %>">Delete</a>
<% }) %>
```

---

## STEP 14: Read Note Route (`GET /read/:filename`)

```js
app.get("/read/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render("read", {
            title: req.params.filename,
            content: data
        });
    });
});
```

## STEP 15: Read Page (`read.ejs`)

Displays:

* Note title
* Full content
* Edit button
* Back button

👉 Editing is not allowed here (best UX practice)

---

## STEP 16: Edit Route (Separate from Read)

```js
app.get("/edit/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render("edit", {
            filename: req.params.filename,
            oldTitle: req.params.filename.replace(".txt", ""),
            content: data
        });
    });
});
```

### Why Separate Edit?

* Clean architecture
* Professional UX
* Matches real applications
* Easy to scale later

---

## STEP 17: Edit Page (`edit.ejs`)

User can:

* Edit Title
* Edit Content
* Save changes

This form submits data to `/update/:filename`

---

## STEP 18: Update Route (`POST /update/:filename`)

```js
app.post("/update/:filename", function (req, res) {
    const oldPath = `./files/${req.params.filename}`;
    const newFileName = req.body.title.split(" ").join("");
    const newPath = `./files/${newFileName}.txt`;

    fs.rename(oldPath, newPath, function () {
        fs.writeFile(newPath, req.body.details, function () {
            res.redirect("/");
        });
    });
});
```

### This Route Handles:

* Title update (file rename)
* Content update (rewrite file)
* Redirect to home

---

## STEP 19: Delete Route (`GET /delete/:filename`)

```js
app.get("/delete/:filename", function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function () {
        res.redirect("/");
    });
});
```

---

## STEP 20: Start Server

```bash
npx nodemon index.js
```

Server runs at:

```
http://localhost:3000
```
