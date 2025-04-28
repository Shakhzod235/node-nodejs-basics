import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const data = await readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8', (err) => {
        if (err) throw Error('FS operation failed')
    })
    console.log(data);

};

await read();