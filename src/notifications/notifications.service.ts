import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateNotificationInput } from './dto/create-notification.input';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNotificationInput) {
    return this.prisma.notifications.create({
      data: {
        ...data,
        created_at: new Date(),
      },
      include: {
        Users: true,
      },
    });
  }

  async findAllForUser(userId: number) {
    return this.prisma.notifications.findMany({
      where: {
        user_id: userId,
        is_deleted: false,
      },
      include: {
        Users: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async markAsRead(id: number) {
    return this.prisma.notifications.update({
      where: { id },
      data: { is_read: true },
    });
  }

  async deleteNotification(id: number) {
    return this.prisma.notifications.update({
      where: { id },
      data: { is_deleted: true },
    });
  }
}
