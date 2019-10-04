import { map } from 'rxjs/operators';

// export function sortBy(collection, mapTo) {
//     return collection.sort((a, b) => { return mapTo(b) - mapTo(a) });
// }


export function sortBy<T extends Array<any>(collection, mapTo: (item: T) => any) {
    return collection.sort((a, b) => { return mapTo(b) - mapTo(a) });
}


export function sortByOperator(key) {
    return map((list) => {
        return sortBy(list, (item) => { return new Date(item[key]); });
    });
}