import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { create } from '../../node_modules/@types/istanbul-reports/index.d';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [];

  findAll(): Users[] {
    return this.users;
  }
}
