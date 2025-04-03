# TezX - High-Performance Backend Framework

TezX is a cutting-edge, high-performance, and lightweight JavaScript framework designed for speed, scalability, and flexibility. Built with modern web development needs in mind, TezX enables efficient routing, middleware management, and static file serving with minimal configuration. It is fully compatible with **Node.js, Deno, and Bun**, making it a truly cross-environment framework.

## 🚀 Key Features

- **High Performance:** Optimized for speed and scalability.
- **Minimal & Intuitive API:** Simple yet powerful.
- **Built-in Static File Serving:** No additional setup required.
- **Robust Middleware Support:** Easily extend functionality.
- **Dynamic & Flexible Routing:** Define routes with ease.
- **Security First:** Designed with security best practices.
- **Efficient HTTP Handling:** Built for high concurrency.
- **Cross-Environment Support:** Works with **Node.js, Deno, and Bun**.

## 📦 Installation

### **1. Create a New Project**

```bash
mkdir my-tezx-app
cd my-tezx-app
```

### **2. Install TezX Framework**

#### **For Node.js**

```bash
npm init -y
npm install tezx
```

```bash
bun add tezx
```

### **3. Project Structure Setup**

```bash
.
├── src/
│   ├── index.ts       # Main application
│   └── env.ts         # Environment config
├── public/            # Static assets
├── .env               # Environment variables
└── tsconfig.json      # TypeScript config
```

## ⚙️ **Environment Configuration**

### **1. Create `.env` File**

```env
PORT=3000
NODE_ENV=development
SECRET_KEY=your_secure_key_here
```

## 💻 **Basic Server Setup**

### **1. Create `src/index.ts`**

```typescript
import { TezX,  nodeAdapter } from "tezx";
import {logger} from "tezx/middleware";
import {loadEnv} from "tezx/helper";
const env = loadEnv();

const server = new TezX({
  env: env,
});

server.get("/", (ctx) => {
  return ctx.text("Hello TezX!");
});

nodeAdapter(server).listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
```

### **2. Add TypeScript Support (Optional)**

```bash
npm install typescript @types/node tsx pkgroll --save-dev
```

**`tsconfig.json`**

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "CommonJS",
    "target": "ESNext",
    "moduleResolution": "Node",
    // "declaration": true,
    // "sourceMap": true,
    "removeComments": false, // Keep comments in .d.ts
    // "emitDeclarationOnly": false, // Ensure .js files are still generated
    "strict": true
    // "esModuleInterop": true,
    // "emitDeclarationOnly": true,
    // "skipLibCheck": true,
    // "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "tests"
  ]
}
```

## ▶️ **Running the Server**

1. **Clone Repository**:

```bash
   git clone https://github.com/tezxjs/tezx-app-example
```

2. **Install latest `tezx`**:

```bash
   npm install tezx@latest
```

3. **Run Project**:

```bash
npm run dev
```

### **Development Mode (Hot Reload)**

3. **Run Project**:

```bash
npm run dev
```

This will start the TezX server on **<http://localhost:3001>**.

## **NodeJS**

Add **`package.json`**

```json
"scripts": {
    "clean": "rm -rf dist",
    "build:cjs": "tsc --module CommonJS --outDir dist/cjs --removeComments",
    "build:esm": "tsc --module ESNext --outDir dist --removeComments",
    "build:dts": "tsc --module ESNext --outDir dist --declaration --emitDeclarationOnly",
    "build": "npm run clean && npm run build:cjs && npm run build:esm && npm run build:dts",
    "start": "node dist/index.js",
    "nodemon": "nodemon src/index.ts",
    "dev": "tsx watch src/index.ts"
}
```

## **Bun**

Add **`package.json`**

```json
"scripts": {
    "dev": "bun run --hot --watch src/index.ts",
}
```

**`src/index.ts`**

```ts
bunAdapter(app).listen(3001, (message) => {
    console.log(message)
})
```

## **Deno**

Add **`package.json`**

```json
"scripts": {
    "dev": "deno run --watch --allow-net  --allow-read --allow-env --unstable-sloppy-imports src/index.ts",
}
```

**`src/index.ts`**

```ts
denoAdapter(app).listen(3001, (message) => {
    console.log(message)
})
```

## 🔧 **Advanced Configuration**

### **1. Add Static File Support**

```typescript
server.static("./public", {
  cacheControl: "public, max-age=31536000",
  headers: {
    "X-Custom-Header": "static-file",
  },
});
```

### **2. Enable CORS**

```typescript
import { cors } from "tezx/middleware";
server.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  }),
);
```

### **3. Custom Middleware**

```typescript
server.use(async (ctx, next) => {
  console.log(`[${new Date().toISOString()}] ${ctx.method} ${ctx.pathname}`);
  return next();
});
```

## **Build**

If  you build `ts` to `js`. Use `tsc` or `pkgroll`

1. **tsc**:

```bash
    "clean": "rm -rf dist",
    "build:cjs": "tsc --module CommonJS --outDir dist/cjs --removeComments",
    "build:esm": "tsc --module ESNext --outDir dist --removeComments",
    "build:dts": "tsc --module ESNext --outDir dist --declaration --emitDeclarationOnly",
    "build": "npm run clean && npm run build:cjs && npm run build:esm && npm run build:dts",
```

2. **pkgroll**:

```bash
    "build": "npx pkgroll --clean-dist",
```

**`package.json`**

```json
"exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    }
  },
```

## 🚨 **Troubleshooting**

### **Common Issues**

| Error                           | Solution                         |
| ------------------------------- | -------------------------------- |
| `Cannot find module 'tezx'`     | Run `npm install`                |
| `Port already in use`           | Change `PORT` in `.env`          |
| `TypeScript compilation errors` | Check `tsconfig.json` settings   |
| `Missing .env variables`        | Verify file path and permissions |

## 📜 License

TezX is open-source under the MIT License. See [LICENSE](LICENSE) for details.

---
🚀 **TezX - Build fast, scale faster.**
