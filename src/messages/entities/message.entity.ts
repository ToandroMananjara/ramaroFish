import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Message {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  sender_id: number;

  @Field(() => Int)
  receiver_id: number;

  @Field()
  content: string;

  @Field(() => Boolean, { defaultValue: false })
  is_read?: boolean;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Int)
  conversation_id: number;

  @Field(() => User, { nullable: true })
  Users_Messages_sender_idToUsers?: User;

  @Field(() => User, { nullable: true })
  Users_Messages_receiver_idToUsers?: User;
}
