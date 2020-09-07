## vue-cli

> npm install -g @vue/cli

vue.config.js配置

```
//vue.config.js 常用配置
module.exports = {
	//基本路径， vue-cli 3.3以前使用baseUrl
	publicPath:'/',
	//输出文件目录
	outputDir: 'dist',
	//用于嵌套生成的静态资产（js,css,img.font)的目录
	assetsDir: '',
	//生产环境sourceMap
	productionSourceMap: true,
	//webpack配置
	configureWebpack:()=>{},
	chainWebpack:()=>{},
	//css相关配置
	css:{
		//启用CSS modules
		modules:false,
		//是否使用css分离插件
		extract:true,
		// 开启 CSS source maps?
		sourceMap:false,
		//css 预设器配置项
		loaderOptions:{}
	},
	//webpack-dev-server相关配置
	devServer:{
		host:'0.0.0.0',
		port:8000,
		proxy:{}, //设置代理
	},
	//第三方插件配置
	pluginOptions:{
	//...	
	}
}
```

## 组件间数据传递

### 父子组件传值
* props/$emit
	* 父组件向子组件传值通过props，子组件向父组件传值通过事件触发
	```
	child.vue
	this.$emit('showMsg','i am from child')
	
	parent.vue
	showMsg(val){
		this.msg=val
	}
	```
* $parent/children
```
parent.vue
mounted(){
	console.log(this.$children[0].childMsg);
}
```
* $ref
```
//parent.vue
<m-child ref="child"></m-child>
mounted(){
	...
	console.log(this.$refs.child)
}
```
### 非父子组件传值

* 事件总线
```
//原理上是建立一公共的js文件，专门用来传递消息
//bus.js
import Vue from "vue"
export default new Vue;


//在需要传递消息的地方引入
import bus from "./bus.js"
//传递消息
bus.$emit('msg',val)

//接收消息
bus.$on('msg',val=>{
	console.log(val)
})
```

* $attrs/listeners


## vuex
数据仓库，用于处理公共数据
* 通过mutations操作state
* mutations提交通过操作，actions可以提供异步操作

### 使用vuex
*调用vuex数据
```
computed:{
	count(){
		return store.state.count
	}
} 
computed:{
	...mapState({'count'})
}
```

* mutations & actions
> state作为第一个参数
```
methods:{
	...mapMutations({
		'increase'
	}),
	...mapMutations({
		add:'increase'
	})
}
```
> mutations通过commit触发，actions通过dispatch触发

### vuex中的计算属性-Getter
```
new Vuex.Store({
	getters:{
		doubleCount(state){
			return state.count * 2
		}
	}
})
//xx.vue
computed:{
	doubleCount(){
		return this.$store.getters.doubleCount	
	}
}
```
