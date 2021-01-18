import * as util from "./util";

export default {
  install(app) {
    app.config.globalProperties.$util = util;
  },
};
