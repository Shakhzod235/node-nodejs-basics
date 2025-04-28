import { rename as renameFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    renameFile(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.txt`, (err) => {
        if (err) throw Error('FS operation failed');
    });
};

await rename();