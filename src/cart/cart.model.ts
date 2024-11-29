import { Field, ObjectType, Int, Float } from "@nestjs/graphql";
import { Publications, Users } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

// Convert Decimal to number before returning or assigni

@ObjectType()
export class Cart {
  @Field(type => Int)  // Explicitly define type for id
  id: number;

  @Field(type => Int)  // Explicitly define type for buyer_id
  buyer_id: number;

  @Field(type => Int)  // Explicitly define type for seller_id
  seller_id: number;

  @Field(type => Int)  // Explicitly define type for publication_id
  publication_id: number;

  @Field(type => Int, { nullable: true })  // Explicitly define type for quantity
  quantity: number | null;

  @Field(type => Float)  // Explicitly define type for total_price
  total_price: Decimal;

  @Field(type => Date)  // Explicitly define type for transaction_date
  transaction_date: Date;

  @Field(type => String, { nullable: true })  // Explicitly define type for status (string type)
  status: string | null;

  @Field(type => Boolean, { nullable: true })  // Explicitly define type for is_deleted (boolean type)
  is_deleted: boolean | null;
}



//   // Relations
//   @Field(type => Users)
//   Users_Cart_buyer_idToUsers: Users;

//   @Field(type => Publications)
//   Publications: Publications;

//   @Field(type => Users)
//   Users_Cart_seller_idToUsers: Users;

