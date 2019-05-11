// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

// 按需导入 Mint-UI 中的组件
// import { Header } from 'mint-ui'
// Vue.component(Header.name, Header)
// 引入全部组件 在main.js中引用
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

Vue.use(Mint);

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.emulateJSON=true;

//缩略图
import VuePreview from "vue-preview"
Vue.use(VuePreview);
// with parameters install



//时间插件
import moment from 'moment'
//Vue.config.productionTip = false
Vue.filter("dataFormat",function (datastr,pattent="YYYY-MM-DD HH:mm:ss") {
      return moment(datastr).format(pattent);
});

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  render:c=> c(App),
  router
})
