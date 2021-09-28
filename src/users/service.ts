import { Injectable } from "@nestjs/common";
import PrismaService from "../prisma";

@Injectable()
export default class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }
}
