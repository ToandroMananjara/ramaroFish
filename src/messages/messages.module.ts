import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { PrismaService } from '../prisma.service';
import { MessagesGateway } from './messages.gateway';

@Module({
  providers: [MessagesService, MessagesResolver, PrismaService, MessagesGateway],
})
export class MessagesModule {}
