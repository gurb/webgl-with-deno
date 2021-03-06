import { Application, send} from "./deps.ts";

import router from "./router.tsx";

const app = new Application();
const PORT = 8000;

app.use(router.routes());

app.use(async (ctx) => {
    const file_path = ctx.request.url.pathname;
    const allowed_files = [
        "/client/main.js",
        "/index.html",
    ];
    if(allowed_files.includes(file_path)){
        await send(ctx, file_path, {
            root: `${Deno.cwd()}/public`,
        });
    }
})

if(import.meta.main){
    console.log(Deno.cwd());
    await app.listen({ port: PORT });
}