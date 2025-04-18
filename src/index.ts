import { TezX } from "tezx";
import { bunAdapter } from "tezx/adapter";
import { logger } from "tezx/middleware";
import { upgradeWebSocket } from "tezx/ws";

let app = new TezX({
    debugMode: true,
});
app.use([logger()]);
app.static("/", "./static")

app.get("/", (ctx) => {
    return ctx.redirect('/index.html');
})

// let clients: Set<WebSocket> = new Set();
app.get(
    "/ws",
    upgradeWebSocket((ctx) => {
        return {
            open: (ws) => {
                ws.send("👋 Welcome to TezX WebSocket!");
            },
            message: async (ws, msg) => {
                // clients.add(ws);
                // clients.forEach(w => {
                //     w.send(msg)
                // })
                // socket.push(ws)
                // console.log(JSON.parse(msg))
                console.log("Received:", msg);
                if (msg === "ping") ws.send("pong 🏓");
                else ws.send("Echo: " + msg);
            },
            close(ws, data) {
                console.log(data?.reason.toString())
            },
        }
    },
    ),
    (ctx) => {
        return ctx.sendFile('ws.html')
    },
);

// Use for node
// nodeAdapter(app).listen(3001, (message) => {
//     console.log(message)
// })

// use it for bun
bunAdapter(app).listen(3002, (message) => {
    console.log(message)
})

// use it for deno

// denoAdapter(app).listen(3001, (message) => {
//     console.log(message)
// })


