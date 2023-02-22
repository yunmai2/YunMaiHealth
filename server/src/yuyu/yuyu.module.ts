import { Module } from "@nestjs/common";
import { YuyuModuleBase } from "./base/yuyu.module.base";
import { YuyuService } from "./yuyu.service";
import { YuyuController } from "./yuyu.controller";
import { YuyuResolver } from "./yuyu.resolver";

@Module({
  imports: [YuyuModuleBase],
  controllers: [YuyuController],
  providers: [YuyuService, YuyuResolver],
  exports: [YuyuService],
})
export class YuyuModule {}
