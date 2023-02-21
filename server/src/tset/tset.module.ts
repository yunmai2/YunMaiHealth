import { Module } from "@nestjs/common";
import { TsetModuleBase } from "./base/tset.module.base";
import { TsetService } from "./tset.service";
import { TsetController } from "./tset.controller";
import { TsetResolver } from "./tset.resolver";

@Module({
  imports: [TsetModuleBase],
  controllers: [TsetController],
  providers: [TsetService, TsetResolver],
  exports: [TsetService],
})
export class TsetModule {}
