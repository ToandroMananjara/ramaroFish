import { Injectable, NotFoundException } from '@nestjs/common';
import Decimal from 'decimal.js';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  // Fetch all carts from the database
  async getAll() {
    const carts = await this.prisma.cart.findMany({
      include: {
        Users_Cart_buyer_idToUsers: true, // Include buyer data
        Users_Cart_seller_idToUsers: true, // Include seller data
        Publications: true, // Include publication data
      },
    });
  return carts;
  }
  async getOne(id: number) {
    return this.prisma.cart.findUnique({
      where: { id },
      include: {
        Users_Cart_buyer_idToUsers: true, // Include buyer data
        Users_Cart_seller_idToUsers: true, // Include seller data
        Publications: true, // Include publication data
      },
    })
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
        total_price: new Decimal(data.total_price),
        transaction_date: data.transaction_date,
        status: data.status || 'pending', // Default to 'pending' if not provided
        is_deleted: data.is_deleted || false, // Default to false if not provided
      },
    });
  }

// Update a cart by ID
async updateCart(id: number, data: {
  buyer_id?: number;
  seller_id?: number;
  publication_id?: number;
  quantity?: number;
  total_price?: number;
  transaction_date?: Date;
  status?: string;
  is_deleted?: boolean;
}) {
  return this.prisma.cart.update({
    where: { id },
    data,
  });
}


  // Delete a cart by ID
  async deleteCart(id: number) {
    return this.prisma.cart.delete({
      where: { id },
    });
  }
}

