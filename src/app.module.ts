import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
@Module({
  imports: [PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService, CartService],
})
export class AppModule {}
