import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewA from './components/ViewA'
import ViewB from './components/ViewB'
import menu from './components/menu'
import typename from './components/typename'
import sort from './components/sort'
import ad from './components/ad'
import banner from './components/banner'
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
	  	path:'typename',
	    component: typename
	  },{
	  	path:'sort',
	    component:sort
	  },{
	  	path:'/',
	  	redirect:'/menu/typename'
	  }
	]	
  },
  { path: '/ad', component: ad ,
	children:[
	  {
	  	path:'big',
	    component:banner
	  },{
	  	path:'small',
	    component:banner
	  },{
	  	path:'/',
	  	redirect:'/ad/big'
	  }
	]
  },
  {
  	path:'/recommend',component:require('./components/recommend'),
  	children:[
  		{
  			path:'data',
  			component:require('./components/data')
  		},
  		{
  			path:'leftdata',
  			component:require('./components/leftdata')
  		},
  		{
  			path:'/',
  			redirect:'/recommend/data'
  		}
  	]
  },
  { path: '/api', component: require('./components/api'),
    children:[
      	{
      		path:'api-ad',
      		component:require('./components/api-ad')
      	},{
      		path:'api-data',
      		component:require('./components/api-data')
      	},{
      		path:'api-text',
      		component:require('./components/api-text')
      	},{
      		path:'api-icon',
      		component:require('./components/api-icon')
      	},{
      		path:'/',
      		redirect:'/api/api-ad'
      	}
    ]
  },
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