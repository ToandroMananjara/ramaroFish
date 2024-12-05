import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from './messages.service';
import { CreateMessageInput } from './dto/create-message.input';

@WebSocketGateway()
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private messagesService: MessagesService) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() data: CreateMessageInput) {
    const message = await this.messagesService.createMessage(data);
    this.server.emit('message', message);
    return message;
  }
} 