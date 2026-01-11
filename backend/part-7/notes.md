
# MongoDB, Mongoose & Database Management

## 1. What is Data Storage?

- Data Storage refers to the process of saving information in a permanent place so that it can be accessed, modified, and managed later.

In software applications:

* User information
* Login credentials
* Posts, comments, products
* Application settings

All such information must be stored in a .database.

- A database is a place where all application data is stored safely and systematically.

## 2. What is a Database?

A database is an organized collection of data that allows:

* Fast access
* Easy update
* Secure storage
* Reliable management

Without a database, data would be lost when the server restarts.

## 3. Types of Databases

There are mainly two types of databases:

### 3.1 SQL Databases (Relational Databases)

SQL stands for Structured Query Language.

#### Characteristics:

* Data is stored in tables
* Tables contain rows and columns
* Data structure is fixed
* Relationships exist between tables

#### Example:

* MySQL
* PostgreSQL
* Oracle
- Used when data is highly structured and relational

### 3.2 NoSQL Databases (Non-Relational Databases)

- NoSQL databases store data in a flexible format.

#### Characteristics:

* No fixed table structure
* Schema can change easily
* High performance
* Scales very well

#### Example:

* MongoDB 
* Firebase
* CouchDB

- Used when data structure is dynamic or large

## 4. Why MongoDB?

- MongoDB is a NoSQL, document-based database.

### Why MongoDB is Preferred:

* Stores data in JSON-like format
* Easy to use with JavaScript
* Flexible schema
* High performance
* Works very well with Node.js

- MongoDB stores data as documents not tables.

## 5. MongoDB Data Structure

MongoDB follows this structure:

```
Database
   └── Collection
           └── Document
```

### 5.1 Database

A database is the top-level container that holds collections.

Example:

```
userDB
```

### 5.2 Collection

A collection is similar to a table in SQL.

* Contains multiple documents
* No fixed structure

Example:

```
users
posts
products
```

### 5.3 Document

A document is a single record stored in JSON format.

Example:

```json
{
  "name": "Bharat",
  "age": 21,
  "email": "bharat@gmail.com"
}
```

## 6. Important MongoDB Terminologies

### * Key

A key is the field name in a document.

Example:

```
name, age, email
```

### * Value

The actual data stored in a key.

Example:

```
"Bharat", 21
```

### * Schema

A schema defines the structure of a document.

It specifies:

* Field names
* Data types
* Required fields

- MongoDB is schema-less, but Mongoose enforces schema.

### * Model

A model is a JavaScript representation of a collection.

* Created using a schema
* Used to perform database operations

## 7. Application Server vs Database Server

### * Application Server

Example: Node.js

Responsibilities:

* Handles client requests
* Executes business logic
* Communicates with database server

---

### * Database Server

Example: MongoDB

Responsibilities:

* Stores data
* Retrieves data
* Updates data
* Deletes data

## 8. Role of Mongoose

- Mongoose is a bridge between Node.js and MongoDB.

### Why Mongoose?

* Provides schema validation
* Makes MongoDB easier to use
* Converts data into JavaScript objects

- Mongoose helps us control data structure in MongoDB.

## 9. Code vs Database Mapping

| CODE (Mongoose / Node.js) | DATABASE (MongoDB)             |
| ------------------------- | ------------------------------ |
| `mongoose.connect()`      | Creates / connects to database |
| `Schema`                  | Defines document structure     |
| `Model`                   | Creates collection             |
| `create()`                | Creates document               |
| `find()`                  | Reads documents                |
| `update()`                | Updates documents              |
| `delete()`                | Deletes documents              |

---

## 10. Conceptual Flow (Very Important)

```
Client (Browser)
        ↓
Application Server (Node.js)
        ↓
Mongoose
        ↓
Database Server (MongoDB)
```

---

## 11. Example Explanation

### Code Side:

```js
mongoose.connect("mongodb://localhost:27017/myDB");
```

 This creates or connects to a database.

```js
const User = mongoose.model("User", userSchema);
```

- This creates a collection.

```js
User.create({ name: "Bharat", age: 21 });
```

- This creates a document.

# Master CRUD Operations with MongoDB


# Installation of MongoDB(Community Edition) 8 on Windows 

## Objective
- To install MongoDB 8 Community Edition on Windows 11 and configure it so that MongoDB commands can be used from anywhere in the system.

## Prerequisites
* Windows 11 (64-bit)
* Administrator access
* Stable internet connection

## Step 1: Download MongoDB 8

1. Open a web browser.
2. Search for MongoDB Community Server Download.
[MongoDB Community Server](https://www.mongodb.com/try/download/community)
3. Opening the official MongoDB website.
4. Select:
   * Version: MongoDB 8.x
   * Platform: Windows
   * Package: MSI
5. Click on Download.
 The downloaded file will be an MSI installer.

## Step 2: Install MongoDB 8

1. Double-click the downloaded MongoDB .msi file.
2. Click Next.
3. Accept the License Agreement.
4. Click Next.

### Choose Setup Type

5. Select Complete Setup.
6. Click Next.

### MongoDB Service Configuration

7. Keep Install MongoDB as a Service selected.
8. Service Name: `MongoDB`
9. Startup Type: Automatic
10. Data Directory (default):

```
C:\Program Files\MongoDB\Server\8.2\data\
```

11. Log Directory (default):

```
C:\Program Files\MongoDB\Server\8.2\log\
```

12. Click Next.

---

### MongoDB Compass (Optional)

13. check Install MongoDB Compass (optional).
14. Click Next.

### Install

15. Click Install.
16. Wait for the installation to complete.
17. Click Finish

---

## Step 3: Add MongoDB to Environment Variables (PATH)

### Why This Step Is Needed

To run MongoDB commands (`mongod`, `mongosh`) from any folder in Command Prompt or PowerShell.

---

### Steps

1. Open Start Menu .
2. Search Edit the system environment variables.
3. Open it.
4. Click on Advanced tab.
5. Click Environment Variables.
6. Under System Variables, select Path.
7. Click Edit.
8. Click New.
9. Paste the path:

```
C:\Program Files\MongoDB\Server\8.2\bin
```

10. Click OK → .OK. → .OK.

---

## Step 4: Verify MongoDB Server Installation

1. Close all open terminals.
2. Open PowerShell or Command Prompt
3. Run:


### 17.1. Command

```
mongod --version
```

### Expected Output look like

```
db version v8.2.0
Build Info: {
    "version": "8.2.0",
    "gitVersion": "...",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

### Meaning

- MongoDB Server (mongod) is installed correctly
- PATH variable is set successfully

---
# Installation MongoDB Shell (mongosh) on window

### Purpose
- MongoDB Shell is used to interact with the MongoDB database.

---

### Steps

1. Search MongoDB Shell Download.
[MongoDB shell](https://www.mongodb.com/try/download/shell)

2. Opening official MongoDB website.
3. Download mongosh for Windows (x64)
4. Run the installer.
5. Click Next → Next → Install → Finish.
-> Usually `mongosh` is auto-added to PATH.

##  Verify MongoDB Shell

1. Open a new PowerShell.
2. Run:

```
mongosh
```

Expected result : 

```
Current Mongosh Log ID: 65b1234abcde1234567890ab
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true
Using MongoDB:          8.2.0
Using Mongosh:          2.x.x
```







## mongodb connection
## schema
## model
## crud
