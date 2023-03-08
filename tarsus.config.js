module.exports = {
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
