import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { CartResolver } from './cart/cart.resolver';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true, // Enable GraphQL Playground for testing
    }),  
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService, CartService,CartResolver,PrismaService],
})
export class AppModule {}
