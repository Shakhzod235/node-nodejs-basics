import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldName = path.join(__dirname, "files", "wrongFilename.txt");
const newName = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(oldName, newName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();