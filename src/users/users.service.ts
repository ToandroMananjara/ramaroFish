import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.users.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        profile_picture: true,
        created_at: true,
        is_deleted: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        profile_picture: true,
        created_at: true,
        is_deleted: true,
      },
    });
  }
}
