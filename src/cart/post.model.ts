import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  owner_user_id?: number;

  @Field({ nullable: true })
  owner_company_id?: number;

  @Field()
  publication_type: string;

  @Field()
  publication_title: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  media?: string;

  @Field({ nullable: true })
  category_id?: number;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  initial_stock?: number;

  @Field({ nullable: true })
  current_stock?: number;

  @Field({ nullable: true })
  max_weight?: number;

  @Field({ nullable: true })
  min_weight?: number;

  @Field({ nullable: true })
  devise_type?: string = 'mga';

  @Field({ nullable: true })
  livraison?: boolean = false;

  @Field()
  location: string;

  @Field({ nullable: true })
  status?: string = 'active';

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field({ nullable: true })
  is_deleted?: boolean = false;
}