import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MessageType {
  @Field(() => Int)
  id: number;

  @Field()
  senderId: number;

  @Field()
  receiverId: number;

  @Field()
  content: string;

  @Field()
  createdAt: Date;
}
