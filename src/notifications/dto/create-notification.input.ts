import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateNotificationInput {
  @Field(() => Int)
  @IsInt()
  user_id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  type: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  reference_id?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  sub_type?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  priority?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  action_url?: string;
}
