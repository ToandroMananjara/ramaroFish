import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMessageInput } from './dto/create-message.input';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: CreateMessageInput) {
    const conversation = await this.prisma.conversations.upsert({
      where: {
        id: data.conversationId || 0,
      },
      create: {
        user1_id: data.senderId,
        user2_id: data.receiverId,
        last_message_at: new Date(),
      },
      update: {
        last_message_at: new Date(),
      },
    });

    return this.prisma.messages.create({
      data: {
        content: data.content,
        sender_id: data.senderId,
        receiver_id: data.receiverId,
        conversation_id: conversation.id,
        created_at: new Date(),
      },
      include: {
        Conversations: true,
        Users_Messages_sender_idToUsers: true,
        Users_Messages_receiver_idToUsers: true,
      },
    });
  }

  async findAll() {
    return this.prisma.messages.findMany({
      include: {
        Users_Messages_sender_idToUsers: true,
        Users_Messages_receiver_idToUsers: true,
      },
    });
  }

  async findByConversation(conversationId: number) {
    return this.prisma.messages.findMany({
      where: {
        conversation_id: conversationId,
      },
      include: {
        Users_Messages_sender_idToUsers: true,
        Users_Messages_receiver_idToUsers: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
  }
}

