import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I said the task would take an hour because I wanted a nap in the context window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry + "\n");
