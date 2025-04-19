import { TezX } from "tezx";
import { nodeAdapter } from "tezx/adapter";
import { logger } from "tezx/middleware";
import { upgradeWebSocket } from "tezx/ws";

const app = new TezX({ debugMode: true });
app.use([logger()]);

app.static("/", "./static");

app.get("/", (ctx) => {
    return ctx.redirect("/index.html");
});

let clients = new Set<WebSocket>();

app.get(
    "/ws",
    upgradeWebSocket(() => {
        return {
            open(ws) {
                ws.send("👋 Welcome to TezX WebSocket!");
            },
            message(ws, msg) {
                try {
                    if (msg === "ping") {
                        ws.send("pong 🏓");
                        return;
                    }

                    const data = JSON.parse((msg as any).toString());

                    switch (data.type) {
                        case "join":
                            clients.add(ws);
                            ws.send(JSON.stringify({ online: clients.size }));
                            break;

                        case "broadcast":
                            clients.forEach((client) => {
                                if (client !== ws && client.readyState === WebSocket.OPEN) {
                                    client.send(JSON.stringify({ message: data.message }));
                                }
                                else if (client.readyState !== WebSocket.OPEN) {
                                    clients.delete(client);
                                }
                            });
                            break;
                    }
                } catch (err) {
                    console.error("Invalid message", err);
                }
            },
            close(ws, data) {
                clients.delete(ws);
                console.log(`Socket closed: ${data?.reason || "No reason"}`);
            },
        };
    }),
    (ctx) => ctx.sendFile("ws.html")
);

// Use for node
// nodeAdapter(app).listen(3001, (message) => {
//     console.log(message)
// })

// use it for bun
nodeAdapter(app).listen(3002, (message) => {
    console.log(message)
})

// use it for deno

// denoAdapter(app).listen(3001, (message) => {
//     console.log(message)
// })


