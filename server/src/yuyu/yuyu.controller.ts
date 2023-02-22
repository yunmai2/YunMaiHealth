import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { YuyuService } from "./yuyu.service";
import { YuyuControllerBase } from "./base/yuyu.controller.base";

@swagger.ApiTags("yuyus")
@common.Controller("yuyus")
export class YuyuController extends YuyuControllerBase {
  constructor(protected readonly service: YuyuService) {
    super(service);
  }
}
