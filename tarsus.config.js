module.exports = {
  web: {
    // 用于定义webpack的输出路径
    publicPath: '/center/',

    // 打包的定义
    appName: "Tarsus",
    serverName: "GateWay",
    proxy: {
      '/api': {
        target: 'http://localhost:3411/api', // 你要请求的目标接口地址
        changeOrigin: true, // 改变请求的源
        pathRewrite: {
          '^/api': '', // 将URL中的/api路径替换为空字符串
        },
        headers: {
          'Access-Control-Allow-Origin': '*', // 添加此行
        },
      }
    },
    clientChain: function (chain) {
      chain.output.filename("bundle.js").end();
      chain.module
      .rule('taro')
      .test(/\.taro$/)
      .use('tarsus-loader')
      .loader('tarsus-loader')
      .options({
        http: '@/utils/axios',
      });

    },
    serverChain: function (chain) {

    }
  },
  database: [
    {
      default: true,
      type: "mysql",
      host: "localhost",
      username: "root",
      password: "123456",
      database: "zrq_shop", //所用数据库
      port: 3306,
      connectionLimit: 10,
    },
  ],
  servant: {
    // 微服务代理层的
    project: "@TarsusDemoProject/GateWay -l node -t @tarsus/http -h 127.0.0.1 -p 9811",
  },
};
