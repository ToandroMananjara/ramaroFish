import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  profile_picture?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Boolean, { defaultValue: false })
  is_deleted?: boolean;
}
