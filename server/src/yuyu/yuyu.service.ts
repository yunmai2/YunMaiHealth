import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YuyuServiceBase } from "./base/yuyu.service.base";

@Injectable()
export class YuyuService extends YuyuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
