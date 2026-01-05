## node.js basic : 
## Introduction to Node.js

- JavaScript was originally designed to run only inside web browsers. It was mainly used to add interactivity to web pages, such as form validation, animations, and dynamic content. Because of this limitation, JavaScript did not have access to system-level features like the file system, networking, or process management, which are required to build backend applications.

- Ryan Dahl observed this limitation and thought that JavaScript should also be capable of running on the server side. Around the same time, Google released the Chrome browser’s V8 JavaScript engine as open source. The V8 engine, written in C++, is responsible for executing JavaScript code very fast.

- Ryan Dahl used the V8 engine and built a wrapper layer around it using C++. This wrapper provided JavaScript with access to low-level system functionalities such as creating servers, handling file operations, and managing network requests. As a result, JavaScript could now be executed outside the browser.

- This platform was named Node.js.

### what is of Node.js
- Node.js is a JavaScript runtime environment that allows JavaScript code to run outside the browser, especially on the server side.

##### How Node.js Works
1. javaScript code is written by the developer.
2. Node.js passes this code to the V8 engine.
3. The V8 engine executes the JavaScript code.
4. Node.js provides built-in modules (like HTTP, File System, and Events) that allow JavaScript to interact with the operating system.
5. Using these features, developers can create servers and backend applications.

###### Key Features of Node.js
- Built on Google Chrome’s V8 engine
- Allows JavaScript to be used for backend development
- Uses an event-driven, non-blocking I/O model
- Efficient and suitable for scalable network applications


## installing node.js and npm 
### Download Node.js
1. Open your browser
2. Go to ->  https://nodejs.org
3. You will see two versions:
 - LTS (Recommended)  → Stable & best for beginners
 - Current → For latest features
4. Click on LTS to download

### Install Node.js
1. Open the downloaded .msi file
2. Click Next
3. Accept the License Agreement
4. Click Next (keep default settings)
5. Make sure these options are checked 
 - Node.js runtime
 - npm package manager
 - Add to PATH
6. Click Install
7. Click Finish

### Verify Installation
1. Open Command Prompt or Terminal
2. Run these commands:
 - node -v
 - npm -v
If version numbers appear, Node.js is installed successfully.

npm init -> package.json -> lekha jokha of the package.json
## working with modules 
## file system operation 
## understanding HTTP Module 

