import { mkdirSync, writeFileSync } from "node:fs";

// Rohim's own make.fun username: one word, nothing else.
const USERNAME: string = "vr23zone-2";

// The program writes the username plus a trailing newline to /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME + "\n", "utf8");
