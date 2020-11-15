import { Dictionary } from './interfaces';

class StorageWorker {
    public static get(storage: Dictionary<string | any>, namespace: string, key: any) {
        if (!storage) {
            return undefined;
        }

        if (!storage[namespace]) {
            this.initNamespace(storage, namespace);
        }

        const data = JSON.parse(storage[namespace]);
        return data[key];
    }

    public static set(storage: Dictionary<string | any>, namespace: string, key: string, value: any) {
        if (!storage) {
            return false;
        }

        if (!storage[namespace]) {
            this.initNamespace(storage, namespace);
        }

        const data = JSON.parse(storage[namespace]);
        data[key] = value;
        storage[namespace] = JSON.stringify(data);
        return true;
    }

    public static remove(storage: Dictionary<string | any>, namespace: string, key: string) {
        if (!storage || !storage[namespace]) {
            return false;
        }

        const data = JSON.parse(storage[namespace]);
        delete data[key];
        storage[namespace] = JSON.stringify(data);
        return true;
    }

    private static initNamespace(storage: Dictionary<any>, namespace: string) {
        storage[namespace] = JSON.stringify({});
        return true;
    }
}

export default StorageWorker;
