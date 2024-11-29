import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartService } from './cart.service'; // Ensure the correct path to your service
import { Cart } from './cart.model'; // Assuming you have a Cart model to return

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
  async createCart(
    @Args('buyer_id') buyer_id: number,
    @Args('seller_id') seller_id: number,
    @Args('publication_id') publication_id: number,
    @Args('total_price') total_price: number,
    @Args('transaction_date') transaction_date: Date,
    @Args('quantity', { nullable: true }) quantity?: number,
    @Args('status', { nullable: true }) status?: string,
    @Args('is_deleted', { nullable: true }) is_deleted?: boolean,
  ): Promise<Cart> {
    const cartData = {
      buyer_id,
      seller_id,
      publication_id,
      total_price,
      transaction_date,
      quantity,
      status,
      is_deleted,
    };
    return this.cartService.createCart(cartData); // Calls the service to create the cart
  }

  // Mutation to delete a cart by ID
  @Mutation(() => Cart) // Return the deleted Cart object
  async deleteCart(@Args('id') id: number): Promise<Cart> {
    return this.cartService.deleteCart(id); // Calls the service to delete the cart
  }
}
