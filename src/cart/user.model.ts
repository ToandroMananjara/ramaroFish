import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Publications } from '@prisma/client';
import {Post} from "./post.model"
@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  company?: boolean;

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  profile_picture?: string;

  @Field({ nullable: true })
  is_deleted?: boolean;

  @Field({ nullable: true })
  is_premium_user?: boolean;

  @Field(() => [Post], { nullable: true })
  publications?: Post[];

  // Ajouter d'autres relations ici si nécessaire (ex: Cart, Reviews, etc.)
}