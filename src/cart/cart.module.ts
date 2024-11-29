import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { PrismaService } from 'src/prisma/prisma.service'; // Ensure this is available
import { PrismaModule } from 'src/prisma/prisma.module'; // If Prisma is in a separate module

@Module({
  imports: [PrismaModule],  // Import PrismaModule if needed
  providers: [CartService, CartResolver],
})
export class CartModule {}
