# Express.js Framework


## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework.
It is distributed as an npm package and is widely used for building web applications and RESTful APIs.

Express.js provides a robust set of features to:

* Handle HTTP requests and responses
* Define application routes
* Use middleware for request processing
* Manage errors efficiently

In simple ->  Express.js manages everything from receiving a client request to sending a server response.

## Setting Up a Basic Express Application

To create a basic Express application:

1. Install Express using npm. 
2. Import Express into your project.
3. Create an Express application instance.
4. Define routes and start the server on a specific port.

A basic Express app listens for incoming HTTP requests and responds based on defined routes.

## Routing in Express.js

Routing refers to the process of defining how an application responds to a client request for a specific URL and HTTP method (GET, POST, PUT, DELETE, etc.).

Each route consists of:

* A request method (e.g., GET)
* A URL path
* A callback function that handles the request and sends a response

Routing helps organize application logic and control how different endpoints behave.

## Middleware in Express.js

Middleware is a function that executes between the time a server receives a request and before it reaches the route handler.

Middleware functions can:

* Modify the request or response objects
* Execute additional logic (authentication, logging, validation, etc.)
* End the request-response cycle
* Pass control to the next middleware or route using `next()`

In simple words, if a request is stopped in between and some processing is performed before reaching the route, that process is called middleware.

## Request and Response Handling

Express.js provides two main objects:

* Request (`req`) – contains information about the incoming request (URL, parameters, body, headers, etc.)
* Response (`res`) – used to send data back to the client (JSON, HTML, status codes, etc.)

Using these objects, the server can:

* Read user input
* Process data
* Send appropriate responses to the client

---

## Error Handling in Express.js

Error handling in Express.js is done using special middleware functions.

These functions:

* Catch errors that occur during request processing
* Prevent the application from crashing
* Send meaningful error messages and status codes to the client

Error-handling middleware helps in:

* Debugging applications
* Improving application reliability
* Providing a better user experience


# Creating a Basic Express Application 


## Step 1: Install Express Using npm

Before using Express.js, a Node.js project must be initialized.

You initialize the project using:

```bash
npm init
```

This command creates a `package.json` file, which stores project metadata and dependencies.

Next, Express is installed using npm:

```bash
npm i express
```

Express.js is now added as a dependency and can be used inside the project.

For automatic server restart during development, nodemon is installed globally:

```bash
npm i nodemon -g
```

The application can be run using:

```bash
node script.js
```

or during development:

```bash
nodemon script.js
```

## Step 2: Import Express into the Project

In the main application file (`script.js`), Express is imported using ES Module syntax:

```js
import express from 'express';
```

This statement imports the Express framework so that its features can be used within the application.

## Step 3: Create an Express Application Instance

After importing Express, an application instance is created:

```js
const app = express();
```

This `app` object represents the Express application.
It is responsible for:

* Handling incoming requests
* Managing middleware
* Defining routes
* Sending responses

## Step 4: Using Middleware

Middleware functions execute between receiving a request and sending a response.

```js
app.use(function (req, res, next) {
    console.log("about page hai ye");
    next();
});
```

This middleware:

* Runs for every incoming request
* Logs a message to the console
* Uses `next()` to pass control to the next middleware or route

Middleware is commonly used for logging, authentication, and request validation.

## Step 5: Defining Routes

A route defines how the server responds to a specific request.

```js
app.get('/', (req, res) => {
    // res.send('My name is Bharat');
});
```

This route:

* Handles HTTP GET requests
* Responds when the root URL (`/`) is accessed
* Uses `req` (request) and `res` (response) objects

Important Note (Book Concept):
If `next()` is used inside a route, it must be declared as a parameter.

Correct academic form:

```js
app.get('/', (req, res, next) => {
    next();
});
```

Otherwise, `next()` is undefined and causes an error.

## Step 6: Error Handling Middleware

Express provides special middleware for handling errors.

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

This error-handling middleware:

* Catches errors from routes or middleware
* Prevents server crashes
* Sends a proper HTTP status code and message to the client

Error-handling middleware always has four parameters, which distinguishes it from normal middleware.

## Step 7: Starting the Server on a Specific Port

Finally, the server is started using:

```js
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

This makes the application listen for incoming requests on port  **3000**.

