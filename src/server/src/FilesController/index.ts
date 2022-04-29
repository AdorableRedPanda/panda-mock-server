import { Func } from '../../../types';

const fs = require('fs');

const MocksDirectoryName = 'mocks_collection';


export class FilesController {
    #filesSubscriptions: Func<string[]>[] = [];

    constructor() {
        if (!fs.existsSync(MocksDirectoryName)) {
            const directory = fs.mkdirSync(MocksDirectoryName, { recursive: true });
            console.log(`directory created: ${directory}`);
        }
    }

    async #emitFilesUpdate() {
        const files = await this.getFilesList();
        this.#filesSubscriptions.forEach(cb => cb(files));
    }

    createFile(name: string, data: unknown) {
        fs.writeFile(`${MocksDirectoryName}/${name}`, JSON.stringify(data), (err: NodeJS.ErrnoException | null) => {
            if(err) {
                return console.log(`cannot create file ${err}`);
            }
        });
    }

    deleteFile(file: string) {
        fs.rm(file, this.#emitFilesUpdate);
    }

    getFilesList(): Promise<string[]> {
        return new Promise((resolve) => {
            fs.readdir(MocksDirectoryName, (err: NodeJS.ErrnoException | null, files: string[]) => {
                if (err) {
                    console.log(`Unable to scan directory: ${err}`);
                    return;
                }

                resolve(files);
            });
        });
    }

    subscribeToFiles(cb: Func<string[]>) {
        this.#filesSubscriptions.push(cb);
    }
}