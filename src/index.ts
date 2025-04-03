import { TezX } from "tezx";
import { logger, rateLimiter } from "tezx/middleware";
import { bunAdapter } from "tezx/adapter";

let app = new TezX({
    debugMode: true,
});
app.use([logger(),
rateLimiter({
    maxRequests: 1,
    windowMs: 10_000,
    onError(ctx, r, error) {
        return ctx.json({ error: error.message })
    }
})
]);
app.static("/", "./static")
app.get("/", (ctx) => {
    return ctx.redirect('/index.html');
})

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


