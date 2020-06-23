import { task, sh, run, desc } from "https://deno.land/x/drake@v1.2.3/mod.ts";

desc("compile");
task("compile", [], async function(){
    await sh("deno bundle client/webgl.ts public/client/webgl.js");
});

desc("Run");
task("start", [], async function(){
    await sh("deno run --allow-env --allow-net --allow-read src/server.ts",);
});

desc("Cached");
task("cache", [], async function(){
    await sh("deno cache --lock=lock.json --lock-write src/server.ts");
});

run();