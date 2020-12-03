class StorageWorker {
    // with this realization it is really possible to get any (string, object, array). It is a main goal why this class was created
    public static get<T>(storage: Record<string, string>, namespace: string, key: T): any | undefined {
        if (!storage) {
            return undefined;
        }

        if (!storage[namespace]) {
            this.initNamespace(storage, namespace);
        }

        const data = JSON.parse(storage[namespace]);
        return data[key];
    }

    public static set<T>(storage: Record<string, string>, namespace: string, key: string, value: T): boolean {
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

    public static remove(storage: Record<string, string>, namespace: string, key: string): boolean {
        if (!storage || !storage[namespace]) {
            return false;
        }

        const data = JSON.parse(storage[namespace]);
        delete data[key];
        storage[namespace] = JSON.stringify(data);
        return true;
    }

    private static initNamespace(storage: Record<string, string>, namespace: string): boolean {
        storage[namespace] = JSON.stringify({});
        return true;
    }
}

export default StorageWorker;
