import * as util from "./util";

export default {
  install(Vue) {
    Vue.property.$util = util;
  },
};
