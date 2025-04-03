"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tezx_1 = require("tezx");
const middleware_1 = require("tezx/middleware");
let app = new tezx_1.TezX({
    debugMode: true,
});
app.use([(0, middleware_1.logger)(),
    (0, middleware_1.rateLimiter)({
        maxRequests: 1,
        windowMs: 10_000,
        onError(ctx, r, error) {
            return ctx.json({ error: error.message });
        }
    })
]);
app.static("/", "./static");
app.get("/", (ctx) => {
    return ctx.redirect('/index.html');
});
(0, tezx_1.bunAdapter)(app).listen(3001, (message) => {
    console.log(message);
});
