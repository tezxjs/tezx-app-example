import { logger, nodeAdapter, TezX } from "tezx";
let app = new TezX({
    logger: logger
});
app.static("/", "./static")
app.get("/", (ctx) => {
    return ctx.redirect('/index.html');
})

nodeAdapter(app).listen(3001, (message) => {
    console.log(message)
})