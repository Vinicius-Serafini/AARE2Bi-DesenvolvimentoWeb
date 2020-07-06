import { Injectable } from "@nestjs/common";
import { Customer } from "./customer.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CustomerService {

    constructor (
        @InjectRepository(Customer)
        private repository: Repository<Customer>) {}

    async save(customer: Customer) {
        return this.repository.save(customer);
    }
    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }

    async update(customer: Customer) {
        return this.repository.update(customer.id, customer);
    }
    
}