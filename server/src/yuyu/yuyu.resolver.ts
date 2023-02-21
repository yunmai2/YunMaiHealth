import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { YuyuResolverBase } from "./base/yuyu.resolver.base";
import { Yuyu } from "./base/Yuyu";
import { YuyuService } from "./yuyu.service";

@graphql.Resolver(() => Yuyu)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class YuyuResolver extends YuyuResolverBase {
  constructor(
    protected readonly service: YuyuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
