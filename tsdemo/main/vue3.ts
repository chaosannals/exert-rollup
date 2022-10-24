import * as util from "./util";

export default {
  install(app: Vue3) {
    app.config.globalProperties.$util = util;
  },
};
