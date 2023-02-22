import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskUserServiceBase } from "./base/taskUser.service.base";

@Injectable()
export class TaskUserService extends TaskUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
