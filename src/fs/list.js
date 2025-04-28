import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const data = await readdir(`${__dirname}/files`, (err) => {
        if (err) throw Error('FS operation failed')
    });
    console.log(data);
};

await list();