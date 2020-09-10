# vue-manage-system

## Project setup

```
vue create vue-manage-system
```

1. Manually select features
* Babel
* Router
* Vuex
* CSS Pre-proceesors
* Linter / Formatter

2. use history mode for router? no
3. Pick a CSS pre-processor Sass/SCSS(with node-sass)
4. Linter / Formatter ESLint + Prettier

## npm run lint
配置`.eslintrc.js`文件，可以自动格式化

## scss全局变量
在assets文件夹下建立scss文件，根据sass语法声明css变量，在vue.config.js中设置
```
css: {
        loaderOptions: {
            sass: {
                prependData: `@import"@/assets/scss/_variable.scss";`
            }
        }
    }
```


## 开发

* elementUI安装
> npm install -S element-ui
> import ElementUI from 'element-ui'
通过.use挂载 

### el-container

### commonAside 

### commonHeader

### 使用vuex实现切换tab页功能
* 在Main.vue中引入CommonTab.vue组件
* 在vuex里定义存取标签的tagList,方便非父子组件传递数据
* 定义vuex中侧边栏点击后将菜单加入到tagList的方法
* 定义vuex中点击标签后触发删除的方法

### mock.js
拦截ajax请求，返回数据，支持生成随机文本数字日期邮箱，图片等
* 作用：生成随机数据，拦截ajax请求
* 安装
```
yarn add mockjs
npm installl mockjs
```
* 核心
	* Mock.mock()
	```
	//根据数据模板生成随机数据
	Mock.mock(rurl, rtype, template)
	/*
	* rurl: 表示需要拦截的url，可以是url正则
	*/
	```
	* Mock.Random()
		* 随机生成数据 	 	  


### echarts 
使用JavaScript实现的开源可视化库，底层依赖矢量图形库ZRender 

#### Echart封装总结 
* 观察文档，考虑组件需要的基本参数 [ECharts](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)
* 参数筛选，分为从父组件传来的参数和自身的参数
* 完善组件，观察设计图，找不同，在文档中寻找对应的配置项
* 细节优化，考虑多种情况下，图表自适应处理

### 通用表格封装
* 表格基本参数分析
	* data: 传入的数据列表
	* prop: 传入的数据字段
	* label: 列名
* 表格可选参数分析
	* width: 列宽
	* type: 类型
* 表格扩展
	* 分页参数
		* total: 数据条数总计
		* page: 当前页数
	* 加载状态
		* loading: 布尔值   
	
