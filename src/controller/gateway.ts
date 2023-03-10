import { Request, Response } from "express";
import { Controller, Get, Inject, Post, Proxy, TarsusProxyService } from "tarsus";
import { GateWayService } from "../service/gateway";
import { ret } from "../utils/ret";

@Controller("/gateway")
class GateWayController {
  @Inject(GateWayService)
  GateWayService:GateWayService

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
    console.log("接收到请求");
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
  public async registService(req){
    const { servantName } = req.body;
    console.log(req.body);
    console.log(req.query);
    
    const data = await this.GateWayService.saveServer(servantName)
    return ret.success(data)
  }
}

export { GateWayController };
