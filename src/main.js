import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

// 显式的使用 Vue.use() 安装路由模块
Vue.use(VueRouter);

let app = Vue.extend(App);

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
let router = new VueRouter({
  'linkActiveClass': 'active'
});

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

router.go('/goods');
// 路由器会创建一个 App 实例，并且挂载到选择符 app 元素上
router.start(app, 'app');

// 原始的写法
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App
// }
// });
