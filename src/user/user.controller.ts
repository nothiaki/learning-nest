import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  function all(): string {
    return "user";
  }
}
