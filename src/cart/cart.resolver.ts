import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CartService } from './cart.service'; // Ensure the correct path to your service
import { Cart } from './cart.model'; // Assuming you have a Cart model to return
import Decimal from 'decimal.js';

@Resolver(() => Cart) // Define Cart as the object type this resolver will handle
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  // Query to get all carts
  @Query(() => [Cart]) // Return a list of Cart objects
  async getAllCarts(): Promise<Cart[]> {
    return this.cartService.getAll(); // Calls the CartService to fetch data
  }

  // Mutation to create a new cart
  @Mutation(() => Cart) // Return the created Cart object
  async createCart(cartData: {
    buyer_id: number;
    seller_id: number;
    publication_id: number;
    quantity?: number;
    total_price: number;
    transaction_date: Date;
    status?: string;
    is_deleted?: boolean;
  }) {
    return this.cartService.createCart(cartData); // No related fields needed here
  }
    // Mutation to update a cart by ID
    @Mutation(() => Cart) // Return the updated Cart object
    async updateCart(id: number, updateData: {
      buyer_id?: number;
      seller_id?: number;
      publication_id?: number;
      quantity?: number;
      total_price?: number;
      transaction_date?: Date;
      status?: string;
      is_deleted?: boolean;
    }) {
      return this.cartService.updateCart(id, updateData); // No related fields needed here
    }

  // Mutation to delete a cart by ID
  @Mutation(() => Cart) // Return the deleted Cart object
  async deleteCart(id: number) {
    return this.cartService.deleteCart(id); // No related fields needed here
  }

  @Query(returns => Cart, { name: 'cart', nullable: true }) // Allow null
  async getCartById(@Args('id', { type: () => Int }) id: number): Promise<Cart | null> {
    return this.cartService.getOne(id); 
  }
}
