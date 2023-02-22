import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskUserService } from "./taskUser.service";
import { TaskUserControllerBase } from "./base/taskUser.controller.base";

@swagger.ApiTags("taskUsers")
@common.Controller("taskUsers")
export class TaskUserController extends TaskUserControllerBase {
  constructor(protected readonly service: TaskUserService) {
    super(service);
  }
}
