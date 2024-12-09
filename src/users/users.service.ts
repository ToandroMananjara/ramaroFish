import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async createUser(data: {
    username: string;
    email: string;
    password: string;
    country: string;
    city: string;
    language: string;
    profile_picture: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.users.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        country: data.country,
        city: data.city,
        language: data.language,
        profile_picture: data.profile_picture,
      },
    });
  }
}
