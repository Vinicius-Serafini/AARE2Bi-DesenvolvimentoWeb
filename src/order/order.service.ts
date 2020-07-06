import { Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "src/orderItem/orderItem.entity";


@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderItem)
        private repository: Repository<OrderItem>) { }

    async create(orderItem: Array<Order>) {
        return (this.repository.save(orderItem));
    }

    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id, { relations: ["customer", "orderItens"] });
    }

    async findAll() {
        return this.repository.find({ relations: ["customer", "orderItens"] })
    }

    async update(order: Order){
        return this.repository.update(order.id, order);
    }
}