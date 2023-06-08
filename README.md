# 该项目共分为以下子项目

- demo-app-1：低代码的前端页面项目，在该项目，可以自定义插件、自定义逻辑、并且将 gate-lowcode-component-1 项目生产的组件进行消费；使用自定义出码方案项目（具体是哪个目录不确定）
- gate-lowcode-component-1: 在这个项目注册自定义组件，打包之后生成目录，供 demo-app-1 消费
- lowcode-nest-backend：提供接口，完成低代码数据的存储，主要完成保存、复制、国际化需求
- 出码 core：具体哪个目录不确定了，待补充
- 出码 demo：使用 出码 core 项目的自定义出码方案，方便调试，具体哪个目录不确定了，待补充


# 打包

- gate-lowcode-component-1

  npm run build && npm run lowcode:build && npm run dumi:build

- demo-app-1

  npm run build

# 本地启动

- demo-app-1
  
  npm run start 

