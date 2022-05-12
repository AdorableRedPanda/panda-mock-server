import { FileMessage, Func, MessageHandler, ResponseMock } from '../../../types';

const fs = require('fs');

const MocksDirectoryName = 'mocks_collection';

export class FilesController implements MessageHandler<FileMessage> {
    #filesSubscriptions: Func<string[]>[] = [];

    constructor() {
        if (!fs.existsSync(MocksDirectoryName)) {
            const directory = fs.mkdirSync(MocksDirectoryName, { recursive: true });
            console.log(`directory created: ${directory}`);
        }
    }

    #emitFilesUpdate() {
        this.getFilesList().then((files) => this.#filesSubscriptions.forEach((cb) => cb(files)));
    }

    #createFile(name: string, data: unknown) {
        fs.writeFile(`${MocksDirectoryName}/${name}.json`, data, (err: NodeJS.ErrnoException | null) => {
            if(err) {
                return console.log(`cannot create file ${err}`);
            }

            this.#emitFilesUpdate();
        });

    }

    #deleteFile(file: string) {
        fs.rm(`${MocksDirectoryName}/${file}`, (err: NodeJS.ErrnoException | null) => {
            if(err) {
                return console.log(`cannot remove file ${err}`);
            }

            this.#emitFilesUpdate();
        });
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

    getFile(name: string): Promise<ResponseMock[]> {
        return new Promise((resolve) => {
            try {
                const file = fs.readFileSync(`${MocksDirectoryName}/${name}`, 'utf-8');
                resolve(JSON.parse(file));
            } catch (err) {
                console.log(`Unable to read file ${name}: ${err}`);
            }
        });
    }

    subscribeToFiles(cb: Func<string[]>) {
        this.#filesSubscriptions.push(cb);
    }

    handleMessage({ type, body }: FileMessage, data: unknown) {
        switch (type) {
            case 'delete':
                this.#deleteFile(body);
                break;
            case 'create':
                this.#createFile(body, JSON.stringify(data));
                break;
        }
    }
}