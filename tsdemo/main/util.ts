import { Long, serialize, deserialize } from 'bson';
import axios from 'axios';

export function aFunction() {
    const doc = {
        long: Long.fromNumber(100),
    };
    const sd = serialize(doc);

    console.log('serialize:', sd);

    const dd = deserialize(sd);

    console.log('deserialize:', dd);
}

export function axiosFunction() {
    const instance = axios.create();
    instance.defaults.timeout = 2500;
    return instance;
}