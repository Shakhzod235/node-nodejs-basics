import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        await mkdir(path.join(__dirname, 'files_copy'), {recursive: true},);

        const data = await readdir(path.join(__dirname, 'files'));

        for (const el of data) {
            await copyFile(
                path.join(__dirname, 'files', el),
                path.join(__dirname, 'files_copy', el)
            );
        }
    } catch (error) {
        if (error) throw Error('FS operation failed');
    }
};

await copy();
