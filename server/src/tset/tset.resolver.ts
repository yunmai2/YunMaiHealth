import * as graphql from "@nestjs/graphql";
import { TsetResolverBase } from "./base/tset.resolver.base";
import { Tset } from "./base/Tset";
import { TsetService } from "./tset.service";

@graphql.Resolver(() => Tset)
export class TsetResolver extends TsetResolverBase {
  constructor(protected readonly service: TsetService) {
    super(service);
  }
}
