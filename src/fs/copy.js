import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const initialDir = path.join(__dirname, "files");
const targetDir = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(initialDir, targetDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
