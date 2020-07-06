import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { Customer } from './customer/customer.entity';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { Product } from './product/product.entity';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { Order } from './order/order.entity';
import { OrderItem } from './orderItem/orderItem.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'Vini123',
          database: 'aare-web-2bi',
          entities: [
            Customer,
            Product,
            Order,
            OrderItem
          ],
          synchronize: true,
          logging: true,
        }),
        TypeOrmModule.forFeature([
          Customer,
          Product,
          Order,
          OrderItem
        ])
    ],
    controllers: [
        CustomerController,
        ProductController,
        OrderController,
    ],
    providers: [
        CustomerService,
        ProductService,
        OrderService
    ],
})
export class AppModule {}
