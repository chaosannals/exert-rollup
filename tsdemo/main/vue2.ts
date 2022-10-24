import * as util from './util';

export default {
    install(Vue2:Vue2) {
        Vue2.property.$util = util;
    }
}