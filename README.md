
---

# TezX - High-Performance Backend Framework

TezX is a high-performance backend framework designed for building scalable and efficient web applications. This README provides detailed installation instructions and usage information for setting up your project with TezX.

```bash
   npm install tezx@latest
```

## Features

- Lightweight and fast
- Built-in static file serving
- Easy-to-use routing
- Flexible logger integration
- Simple API for creating web applications
- Fully customizable to fit your needs

## Installation

Follow these steps to get started with TezX:

### Prerequisites

Before installing TezX, make sure you have **Node.js** and **npm** installed. You can download Node.js from the [official Node.js website](https://nodejs.org/).

Check if Node.js and npm are installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

### Steps to Install TezX

1. **Create a new directory for your project**:

   ```bash
   mkdir my-tezx-project
   cd my-tezx-project
   ```

2. **Initialize a new Node.js project**:

   Run the following command to generate a `package.json` file:

   ```bash
   npm init -y
   ```

3. **Install TezX as a dependency**:

   Install TezX from npm:

   ```bash
   npm install tezx@latest
   ```

4. **Create a basic `server.js` file**:

   Inside your project directory, create a file named `server.js` and add the following code:

   ```javascript
   // server.js
   const { logger, nodeAdapter, TezX } = require("tezx");

   // Initialize TezX application
   let app = new TezX({
       logger: logger
   });

   // Serve static files from the 'static' directory
   app.static("/", "./static");

   // Define a simple route
   app.get("/", (ctx) => {
       return ctx.html(`
           <h1>TezX Server is Running</h1>
           <p>Welcome to your TezX-based server!</p>
       `);
   });

   // Start the server on port 3001
   nodeAdapter(app).listen(3001, () => {
       console.log("TezX server is running on http://localhost:3001");
   });
   ```

5. **Add a `static` directory**:

   Create a directory named `static` in your project folder to serve static files like images, CSS, JavaScript, etc.

   ```bash
   mkdir static
   ```

   You can place files like `favicon.ico` or `index.html` inside the `static` folder.

6. **Run the server**:

   Start your server by running:

   ```bash
   node server.js
   ```

   This will start the TezX server on **<http://localhost:3001>**.

### File Structure

Here is the basic file structure for your project:

```
my-tezx-project/
├── server.js           # Main server file
├── package.json        # Project dependencies and metadata
└── static/             # Folder for static files (images, CSS, etc.)
```

## Usage

- Once the server is running, you can navigate to `http://localhost:3001` in your browser to see the application in action.
- The `static/` folder can be used to serve images, CSS files, and other static assets.
- You can define additional routes with `app.get()`, `app.post()`, etc., based on your application needs.

## Customization

- **Logger**: The `logger` option in the TezX initialization can be customized to use different logging methods (e.g., `winston`, `bunyan`).
- **Static File Handling**: By default, TezX serves static files from the `static` directory. You can change this directory by modifying the `app.static()` line in `server.js`.
- **Route Handling**: TezX provides simple APIs for defining routes and middleware. You can handle various HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`.

## Contributing

TezX is an open-source project. Feel free to contribute by submitting pull requests or opening issues. We welcome improvements and feedback from the community.

## License

TezX is released under the MIT License. See LICENSE for more information.

---
