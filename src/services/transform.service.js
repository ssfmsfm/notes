export class TransformService {
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map(keys => {
            // console.log(keys);
            const item = fbData[keys];
            item.id = keys;
            // console.log(item);
            return item;
        });
    }
}