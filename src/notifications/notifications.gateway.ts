import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationsService } from './notifications.service';
import { CreateNotificationInput } from './dto/create-notification.input';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true
  },
  transports: ['websocket', 'polling']
})
export class NotificationsGateway {
  private logger = new Logger('NotificationsGateway');
  
  @WebSocketServer()
  server: Server;

  constructor(private notificationsService: NotificationsService) {}

  afterInit() {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createNotification')
  async handleNotification(@MessageBody() data: CreateNotificationInput) {
    this.logger.log(`Received notification: ${JSON.stringify(data)}`);
    const notification = await this.notificationsService.create(data);
    this.server.emit(`notification:${notification.user_id}`, notification);
    return notification;
  }

  async sendNotification(userId: number, notification: any) {
    this.server.emit(`notification:${userId}`, notification);
  }
}
