import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

@InputType()
export class CreateMessageInput {
  @Field(() => Int)
  @IsInt()
  senderId: number;

  @Field(() => Int)
  @IsInt()
  receiverId: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  content: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  conversationId?: number;
}
