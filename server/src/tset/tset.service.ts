import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TsetServiceBase } from "./base/tset.service.base";

@Injectable()
export class TsetService extends TsetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
