import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Notification {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field()
  type: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Int, { nullable: true })
  reference_id?: number;

  @Field(() => String, { nullable: true })
  sub_type?: string;

  @Field(() => String, { nullable: true })
  priority?: string;

  @Field(() => String, { nullable: true })
  action_url?: string;

  @Field(() => Boolean, { defaultValue: false })
  is_read?: boolean;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  expires_at?: Date;

  @Field(() => User, { nullable: true })
  Users?: User;
}
