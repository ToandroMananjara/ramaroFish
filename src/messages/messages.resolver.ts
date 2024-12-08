import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => [Message])
  async messages() {
    return this.messagesService.findAll();
  }

  @Query(() => [Message])
  async messagesByConversation(@Args('conversationId', { type: () => Int }) conversationId: number) {
    return this.messagesService.findByConversation(conversationId);
  }

  @Mutation(() => Message)
  async createMessage(@Args('input') createMessageInput: CreateMessageInput) {
    return this.messagesService.createMessage(createMessageInput);
  }
}
