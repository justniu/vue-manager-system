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
����`.eslintrc.js`�ļ��������Զ���ʽ��

## scssȫ�ֱ���
��assets�ļ����½���scss�ļ�������sass�﷨����css��������vue.config.js������
```
css: {
        loaderOptions: {
            sass: {
                prependData: `@import"@/assets/scss/_variable.scss";`
            }
        }
    }
```


## ����

* elementUI��װ
> npm install -S element-ui
> import ElementUI from 'element-ui'
ͨ��.use����
