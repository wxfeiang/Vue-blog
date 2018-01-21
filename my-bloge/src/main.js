// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
/*自定义指令*/
// Vue.directive('rainbow',{
// 	/*钩子函数*/
// 	bind(el,binding,vnode){
// 		//console.log(Math.random().toString(16));
// 		el.style.color ="#" +Math.random().toString(16).slice(2,8);

// 	}
// })
/*全局*/
Vue.directive('them',{

    bind(el,binding,vnode){
    	if(binding.value == 'wide'){
    		console.log("aaa这是第23行")
    		el.style.maxWidth = "1260px";
    	} else if(binding.value == "narrow"){
    	el.style.maxWidth = "560px";

    	}
    	if(binding.arg =="column"){
    		el.style.background ="#6677cc";
    		el.style.padding ="20px";

    	}



    }

})
/*自定义过滤器*/
/*全局*/
// Vue.filter("uppercase",function(value){
// 	return value.toUpperCase();
// });
Vue.filter("snppit",function(index){
	return index.slice(0,100)+ "......";
});

/*创建路由*/
const router  = new VueRouter({
    routes : Routes,
    mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router : router
})
