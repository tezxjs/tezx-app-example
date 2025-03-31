import { bunAdapter, denoAdapter, logger, nodeAdapter, TezX } from "tezx";
let app = new TezX({
    // logger: logger
});
app.static("/", "./static")
app.get("/", (ctx) => {
    return ctx.redirect('/index.html');
})

// Use for node
nodeAdapter(app).listen(3001, (message) => {
    console.log(message)
})

// use it for bun
bunAdapter(app).listen(3001, (message) => {
    console.log(message)
})

// use it for deno

// denoAdapter(app).listen(3001, (message) => {
//     console.log(message)
// })


