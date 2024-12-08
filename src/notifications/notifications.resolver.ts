import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationsService } from './notifications.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';

@Resolver(() => Notification)
export class NotificationsResolver {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Query(() => [Notification])
  async notifications(@Args('userId', { type: () => Int }) userId: number) {
    return this.notificationsService.findAllForUser(userId);
  }

  @Mutation(() => Notification)
  async createNotification(@Args('input') input: CreateNotificationInput) {
    return this.notificationsService.create(input);
  }

  @Mutation(() => Notification)
  async markNotificationAsRead(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.markAsRead(id);
  }

  @Mutation(() => Notification)
  async deleteNotification(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.deleteNotification(id);
  }
}
