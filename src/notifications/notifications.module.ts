import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { NotificationsGateway } from './notifications.gateway';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    NotificationsService,
    NotificationsResolver,
    NotificationsGateway,
    PrismaService,
  ],
  exports: [NotificationsService],
})
export class NotificationsModule {}
