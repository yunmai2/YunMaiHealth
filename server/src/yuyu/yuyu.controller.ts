import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { YuyuService } from "./yuyu.service";
import { YuyuControllerBase } from "./base/yuyu.controller.base";

@swagger.ApiTags("yuyus")
@common.Controller("yuyus")
export class YuyuController extends YuyuControllerBase {
  constructor(
    protected readonly service: YuyuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
