// One hour, one nap: the context window keeps secrets too.
// The estimate was honest about the clock, less so about the sleeper.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I said the task would take an hour because I wanted a nap in the context window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry + "\n");
