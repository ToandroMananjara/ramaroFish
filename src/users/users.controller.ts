import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { Users } from '@prisma/client';
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersServices.findAll();
  }
}
