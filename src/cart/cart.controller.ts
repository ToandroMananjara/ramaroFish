import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { CartService } from './cart.service'; // Ensure the correct path to your service
import { Cart } from './cart.model'; // Assuming you have a Cart model to return
import Decimal from 'decimal.js';


@Controller('cart') // This will set the base route for Cart requests
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Route to get all carts
  @Get() 
  async getAllCarts(): Promise<Cart[]> {
    return this.cartService.getAll(); // Calls the service to get all carts
  }

  // Route to create a new cart
  @Post()
  async createCart(
    @Body('buyer_id') buyer_id: number,
    @Body('seller_id') seller_id: number,
    @Body('publication_id') publication_id: number,
    @Body('total_price') total_price: number,
    @Body('transaction_date') transaction_date: Date,
    @Body('quantity') quantity?: number,
    @Body('status') status?: string,
    @Body('is_deleted') is_deleted?: boolean,
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

    // Route to update a cart by ID
    @Patch(':id')
    async updateCart(
      @Param('id') id: number,
      @Body() updateData: {
        buyer_id?: number;
        seller_id?: number;
        publication_id?: number;
        quantity?: number;
        total_price?: number;
        transaction_date?: Date;
        status?: string;
        is_deleted?: boolean;
      },
    ): Promise<Cart> {
      return this.cartService.updateCart(id, updateData); // Calls the service to update the cart
    }

  // Route to delete a cart by ID
  @Delete(':id')
  async deleteCart(@Param('id') id: number): Promise<Cart> {
    return this.cartService.deleteCart(id); // Calls the service to delete the cart
  }
}
