import { Controller, Get } from "@nestjs/common";
import UserService from "./service";

@Controller("users")
export default class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
