import { rm } from "node:fs/promises";

await rm(".next", { force: true, recursive: true });
console.log("Removed .next build cache.");
