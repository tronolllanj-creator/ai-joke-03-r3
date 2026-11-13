// ai-joke-03: one joke about AI coding agents, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = "The AI agent approved its own PR so fast it didn't even notice it replaced the entire backend with a CSS file.";

writeFileSync(join(dir, 'entry.txt'), joke, 'utf8');