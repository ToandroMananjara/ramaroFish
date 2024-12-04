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
 
  @Get(":id")
  async getCartById(@Param('id') id: string) {
    return this.cartService.getOne(Number(id));
  }


  // Route to create a new cart
  @Post()
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
    // Create the cart, without related fields.
    return this.cartService.createCart(cartData);
  }

    // Route to update a cart by ID
    @Patch(':id')
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
      // Update the cart, without related fields.
      return this.cartService.updateCart(id, updateData);
    }

  // Route to delete a cart by ID
  @Delete(':id')
  async deleteCart(id: number) {
    // Delete the cart, without needing related fields.
    return this.cartService.deleteCart(id);
  }
}
