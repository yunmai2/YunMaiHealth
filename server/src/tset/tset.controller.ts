import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TsetService } from "./tset.service";
import { TsetControllerBase } from "./base/tset.controller.base";

@swagger.ApiTags("tsets")
@common.Controller("tsets")
export class TsetController extends TsetControllerBase {
  constructor(protected readonly service: TsetService) {
    super(service);
  }
}
