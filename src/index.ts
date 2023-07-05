import express from 'express';
import {
  TarsusHttpApplication,
  loadController,
  loadGlobalPipe,
  loadInit,
  loadServer,
} from "tarsus";
import { GateWayController } from "./controller/gateway";
import { LogGlobalPipe } from "./pipe/log";
import { ProjectController } from "./controller/project";
import path from 'path'
@TarsusHttpApplication
class TestApplication {
  static main(): void {
    loadGlobalPipe([LogGlobalPipe]);
    loadController([GateWayController, ProjectController]);
    loadInit((app) => {
      const { loadWebpackDev } = require('tarsus-cli');
      
      loadWebpackDev(app)
      // app.use(express.static("dist/app"));

      // app.get("*", (_req, res) => {
      //   res.sendFile(path.join(__dirname, "app/index.html"));
      // });

    })
    // ms true 
    // 代表开启微服务网关的代理，所有请求将会转发给 后台微服务
    loadServer({ ms: false });

  }
}

TestApplication.main();