# Tarsus GateWay

## 整合的仓库

- [@Tarsus/GateWay](https://github.com/chelizichen/Tarsus-GateWay) 微服务网关层
- [@Tarsus/Node](https://github.com/chelizichen/Tarsus) 包含 Http服务  微服务模块 依赖注入 ORM 命令行 等多个开发包的库
- [@Tarsus/Java-Proxy](https://github.com/chelizichen/Tarsus-Java-Proxy) SpringBoot，可以提供Http 服务，也可以调用微服务
- [@Tarsus/Java](https://github.com/chelizichen/Tarsus-Java) Java 微服务模块 示例代码

## use GateWay

````cmd
npm install Tarsus@latest
````


Tarsus 提供了TarsusProxyService类 和转发请求
调用 Http 服务使用 **TarsusProxyService::request**
调用 Rpc 服务使用 **TarsusProxyService::transmit**
此外 也可以在使用 拦截器拦截请求


````TS
@Controller("/gateway")
class GateWayController {
  // 代理 微服务
  // {
  //     "interFace": 接口名,
  //     "method": 方法名,
  //     "data": 数据
  //     "timeout": 超时时间,
  //     "proxy": 远程端口服务名称
  // }
  @Proxy("/tarususRpc")
  public tarsusRpcProxy(req: Request, res: Response) {
    TarsusProxyService.transmit(req, res);
  }

  // proxy, data, url, method
  // 代理 Http服务
  // {
  //      proxy: 远程端口服务名称
  //      method: 请求方法
  //      url:请求路由
  //      data:方法体
  // }
  @Proxy("/tarsusHttp")
  public tarsusHttpProxy(req: Request, res: Response) {
    TarsusProxyService.request(req, res);
  }

  // 注册服务
  // servantName = @TarsusDemoProject/JavaProxyDemo -l java -t @tarsus/http -h 127.0.0.1 -p 7098
  // 拿到群组 注册对应微服务
  // SADD TarsusDemoProject + servantName
  @Post("/regist")
  public async registService(req:Request){
    const { servantName } = req.body;
    const data = await this.GateWayService.saveServer(servantName)
    return ret.success(data)
  }
}
````
