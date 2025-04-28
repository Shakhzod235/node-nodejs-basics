import { rm } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    rm(`${__dirname}/files/fileToRemove.txt`, (err) => {
        if (err) throw Error('FS operation failed')
    });
};

await remove();