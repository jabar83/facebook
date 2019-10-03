export function sortBy<T extends Array<any>>(collection: T, mapTo): T {
    return collection.sort((a, b) => { return mapTo(b) - mapTo(a) });
}