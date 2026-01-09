# Building a Notes Taking Web App with (Node.js + Express + EJS)

## STEP 1: Decide the Goal of the Project

First, I decide to build a Notes Taking Web Application.

The application should be able to:

* Take a title and description from the user
* Save the note on the server
* Show all saved notes
* Open a note to read it
* Delete a note

For learning purposes, I decide to use:

* Node.js File System as storage
* EJS for server-side rendering
* Express for backend routing

## STEP 2: Create the Project Folder

I create a folder where all backend work will be done:

```
learning-subject-by-yt/backend/nodejs/part-7
```

This folder will contain:

* Server code
* Views
* Static files
* Notes data

## STEP 3: Initialize the Node.js Project

Inside `part-7`, I run:

```bash
npm init -y
```

This creates a `package.json` file.

Purpose of `package.json`:

* Stores project information
* Manages dependencies
* Allows the project to be run and shared properly

## STEP 4: Install Required Packages

### Install Express

```bash
npm i express
```

I install Express because it:

* Creates the server
* Handles routes
* Manages requests and responses

### Install EJS

```bash
npm install ejs
```

I install EJS because:

* HTML alone cannot display backend data
* EJS allows embedding JavaScript into HTML
* It supports server-side rendering

### Install Nodemon (for development)

```bash
npm install -g nodemon
```

Nodemon automatically restarts the server when files change.

## STEP 5: Create Required Files and Folders

I now create the project structure manually:

```
part-7
├── index.js
├── public
│   ├── images
│   └── javascripts
├── views
│   ├── index.ejs
│   └── read.ejs
└── files
```

### Purpose of Each:

* `index.js` → main server file
* `public` → static assets
* `views` → EJS templates
* `files` → stores notes as `.txt` files

## STEP 6: Create the Express Server (`index.js`)

I start by importing required modules:

```js
const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');
```

Then I configure the app:

```js
app.set("view engine", "ejs");
```

This tells Express to use EJS for rendering views.

## STEP 7: Add Middleware

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
```

What this does:

* Parses JSON data
* Parses form data
* Makes the `public` folder accessible in the browser

## STEP 8: Create the Home Route (GET `/`)

```js
app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render("index", { files });
    });
});
```

Explanation:

* Reads all files from the `files` folder
* Each file represents one note
* Sends the list of files to `index.ejs`
* Page is rendered dynamically

## STEP 9: Create the Form (index.ejs)

In `views/index.ejs`, I write HTML with Tailwind CSS CDN.

The form sends data to `/create` using POST:

```html
<form action="/create" method="post">
    <input name="Title" placeholder="Note Title">
    <textarea name="details" placeholder="Write note"></textarea>
    <button>Create Note</button>
</form>
```

This form allows users to enter:

* Note title
* Note content

## STEP 10: Handle Note Creation (POST `/create`)

```js
app.post('/create', function (req, res) {
    const fileName = req.body.Title.split(' ').join('');
    fs.writeFile(`./files/${fileName}.txt`, req.body.details, function () {
        res.redirect("/");
    });
});
```

Explanation:

* Reads form data using `req.body`
* Creates a text file using the title
* Stores note content inside the file
* Redirects user back to home page

## STEP 11: Display Notes List (EJS Logic)

In `index.ejs`, I use EJS syntax:

```ejs
<% if(files.length > 0){ %>
    <% files.forEach(function(file){ %>
        <h2><%= file %></h2>
        <a href="/read/<%= file %>">Read</a>
        <a href="/delete/<%= file %>">Delete</a>
    <% }) %>
<% } else { %>
    <p>No notes yet.</p>
<% } %>
```

This:

* Loops through files
* Displays each note
* Adds Read and Delete options

## STEP 12: Create Read Route (GET `/read/:filename`)

```js
app.get('/read/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render("read", {
            title: req.params.filename,
            content: data
        });
    });
});
```

Explanation:

* Reads the selected note file
* Sends content to `read.ejs`
* Displays full note

## STEP 13: Create Read Page (read.ejs)

This page shows:

* Note title
* Full note content
* Back button

It uses EJS to print backend data.

## STEP 14: Create Delete Route (GET `/delete/:filename`)

```js
app.get('/delete/:filename', function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function () {
        res.redirect("/");
    });
});
```

Explanation:

* Deletes the selected file
* Redirects back to home page
* Updates notes list automatically

## STEP 15: Start the Server

```bash
npx nodemon index.js
```

The server starts on:

```
http://localhost:3000
```

## FINAL RESULT

Now the application can:

* Create notes
* Store them on the server
* Display all notes
* Read a note
* Delete a note

## What This Project Teaches

* Backend routing
* Form handling
* File system usage
* Server-side rendering
* MVC thinking
* Real backend workflow
