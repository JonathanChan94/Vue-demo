import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewA from './components/ViewA'
import ViewB from './components/ViewB'
import menu from './components/menu'
import typename from './components/typename'
import sort from './components/sort'
import ad from './components/ad'
import big from './components/big'
import small from './components/small'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import App from './components/App'

Vue.use(ElementUI)

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/menu', component: menu ,
	children:[
	  {
	  	path:'/menu/typename',
	    component: typename
	  },{
	  	path:'/menu/sort',
	    component:sort
	  },{
	  	path:'/',
	  	component:typename
	  }
	]	
  },
  { path: '/ad', component: ad ,
	children:[
	  {
	  	path:'/ad/big',
	    component:big
	  },{
	  	path:'/ad/small',
	    component:small
	  },{
	  	path:'/',
	  	component:big
	  }
	]
  },
  // { path: 'data', component: data},
  { path: '/foo', component: ViewA },
  { path: '/bar', component: ViewB }
]

const router = new VueRouter({
  routes
})


var data={type:1,show:true};

// const app = new Vue({
//   router,
//   data:data
// }).$mount('.main')

// new Vue({
// 	el:'#app',
// 	template: '<App/>',
//  	components: { App }
// })

new Vue({
	el:'.main',
	router,
	data:data
})



// router.start(App, 'app')

// export default router;