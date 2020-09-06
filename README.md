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
