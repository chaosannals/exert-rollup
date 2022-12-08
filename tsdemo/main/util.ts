import { Long, serialize, deserialize } from 'bson';

export function aFunction() {
    const doc = {
        long: Long.fromNumber(100),
    };
    const sd = serialize(doc);

    console.log('serialize:', sd);

    const dd = deserialize(sd);

    console.log('deserialize:', dd);
}