import * as graphql from "@nestjs/graphql";
import { YuyuResolverBase } from "./base/yuyu.resolver.base";
import { Yuyu } from "./base/Yuyu";
import { YuyuService } from "./yuyu.service";

@graphql.Resolver(() => Yuyu)
export class YuyuResolver extends YuyuResolverBase {
  constructor(protected readonly service: YuyuService) {
    super(service);
  }
}
