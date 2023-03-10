import {
  TarsusHttpApplication,
  loadController,
  loadGlobalPipe,
  loadServer,
} from "tarsus";
import { GateWayController } from "./controller/gateway";
import { LogGlobalPipe } from "./pipe/log";
import { ProjectController } from "./controller/project";

@TarsusHttpApplication
class TestApplication {
  static main(): void {
    loadGlobalPipe([LogGlobalPipe]);
    loadController([GateWayController,ProjectController]);

    // ms true 
    // 代表开启微服务网关的代理，所有请求将会转发给 后台微服务
    loadServer({ms: true});
    
  }
}

TestApplication.main();