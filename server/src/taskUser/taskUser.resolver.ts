import * as graphql from "@nestjs/graphql";
import { TaskUserResolverBase } from "./base/taskUser.resolver.base";
import { TaskUser } from "./base/TaskUser";
import { TaskUserService } from "./taskUser.service";

@graphql.Resolver(() => TaskUser)
export class TaskUserResolver extends TaskUserResolverBase {
  constructor(protected readonly service: TaskUserService) {
    super(service);
  }
}
