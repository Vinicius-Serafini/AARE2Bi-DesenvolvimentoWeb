  
import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerDto } from "./customer.dto";
import { Customer } from "./customer.entity"
import { plainToClass } from "class-transformer";

@Controller("/customers")
export class CustomerController {

    constructor(private readonly service: CustomerService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) { 
        return this.service.findById(id);
    }

    @Post()
    save(@Body() customerDto: CustomerDto) {
        const customer = plainToClass(Customer, customerDto);
        return this.service.save(customer);
    }

    @Delete()
    delete(@Body() customer){
        const { id } = customer;
        
        return this.service.delete(id);
    }

    @Put()
    update(@Body() customer){
            return this.service.update(customer)
    }
}