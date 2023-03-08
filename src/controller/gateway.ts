import { Request,Response } from 'express';
import { Controller, Proxy, proxyService } from "tarsus";
import { request } from '../utils/proxyRequest';

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
    const { body,query } = req;
    const merge = Object.assign({},body,query)
    proxyService.transmit(merge, res);
  }
    // 代理 Http服务
    // query | body :{
    // url: 远程端口地址
    // method: 请求方法
    // data
    //}
  @Proxy("/tarsusHttp")
  public tarsusHttpProxy(req: Request, res: Response) {
    const { body,query } = req as any;
    let data = Object.assign({},body,query)
    request(data).then(ret=>{
        res.json(ret)
    })
  }
}

export { GateWayController };
