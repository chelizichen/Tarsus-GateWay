import {
  TarsusHttpApplication,
  loadController,
  loadServer,
} from "tarsus";
import { GateWayController } from "./controller/gateway";

@TarsusHttpApplication
class TestApplication {
  static main(): void {
    loadController([GateWayController]);
    // ms true 
    // 代表开启微服务网关的代理，所有请求将会转发给 后台微服务
    loadServer({ms: true});
    
  }
}

TestApplication.main();