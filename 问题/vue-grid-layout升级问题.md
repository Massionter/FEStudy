#### 1. vue-grid-layout 更新版本遇到的问题(未解决)

- 原版本：`vue-grid-layout`:2.3.4
- 最新版本：`vue-grid-layout`:2.3.11

由于`2.3.10`版本使用了ES6（imported as ES6 modules to optimize size），[2.3.10](https://openbase.com/js/vue-grid-layout/versions#2.3.10)及以上的版本会报错，其他版本则正常。报错信息如下：

```js
in ./node_modules/vue-grid-layout/dist/vue-grid-layout.common.js

Module parse failed: Unexpected token (10332:31)
You may need an appropriate loader to handle this file type.
     subModification.prepareStates(modifiers);
     state.subModification = subModification;
     subModification.startAll({ ...arg
     });
   },
```

根据[#488](https://github.com/jbaysolutions/vue-grid-layout/issues/488)提示，给webpack添加babel配置，配置如下

```javascript
{
    test: /.js$/,
    use: {
        loader: 'babel-loader'
    },
    include: [
        resolve('src'),
        resolve('test'),
        resolve('node_modules/vue-grid-layout')
    ]
},
```

配置后就不会报错了，但是在引入`vue-grid-layout`时，报错显示找不到此模块。

```javascript
"export 'default' (imported as 'VueGridLayout') was not found in 'vue-grid-layout'
```



#### 2. 

