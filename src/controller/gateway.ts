import { Request,Response } from 'express';
import { Controller, Proxy, TarsusProxyService } from "tarsus";

@Controller("/gateway")
class GateWayController {

    // 代理 微服务
    // {
    //     "interFace": 接口名,
    //     "method": 方法名,
    //     "data": 数据
    //     "timeout": 超时时间,
    //     "key": 对应后台服务名称
    // }
  @Proxy("/tarususRpc")
  public tarsusRpcProxy(req: Request, res: Response) {
    TarsusProxyService.transmit(req, res);
  }
    // proxy, data, url, method
    // 代理 Http服务
    // {
      // proxy: 远程端口服务名称
      // method: 请求方法
      // url:请求路由
      // data:方法体
    // }
  @Proxy("/tarsusHttp")
  public tarsusHttpProxy(req: Request, res: Response) {
    TarsusProxyService.request(req, res);
  }
}

export { GateWayController };
