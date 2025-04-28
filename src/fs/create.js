import { appendFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    appendFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', 'utf-8', (err) => {
        if (err) throw Error('FS operation failed')
    });
    console.log('File created!');
};

await create();