import Vue from 'vue'
import App from './App.vue'
// 先找文件，没有就找目录
// 如果找到目录,优先加载目录中的index文件

import router from './router'

// node_modules包 public静态资源 src main.js入口模块 router.js路由模块 views路由组件 components非路由组件assets静态资源
// .browserslistrc 浏览器版本处理 .gitignore忽略管理文件 .editorconfig 代码格式详情

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
