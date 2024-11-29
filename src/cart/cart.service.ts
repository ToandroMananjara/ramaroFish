import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  // Fetch all carts from the database
  async getAll() {
    return this.prisma.cart.findMany(); 
  }

  // Create a new cart
  async createCart(data: { 
    buyer_id: number;
    seller_id: number;
    publication_id: number;
    quantity?: number;
    total_price: number;
    transaction_date: Date;
    status?: string;
    is_deleted?: boolean;
  }) {
    return this.prisma.cart.create({
      data: {
        buyer_id: data.buyer_id,
        seller_id: data.seller_id,
        publication_id: data.publication_id,
        quantity: data.quantity || 1, // Default to 1 if not provided
        total_price: data.total_price,
        transaction_date: data.transaction_date,
        status: data.status || 'pending', // Default to 'pending' if not provided
        is_deleted: data.is_deleted || false, // Default to false if not provided
      },
    });
  }

  // Delete a cart by ID
  async deleteCart(id: number) {
    return this.prisma.cart.delete({
      where: { id },
    });
  }
}

