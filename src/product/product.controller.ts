import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";
import { Product } from "./product.entity"
import { plainToClass } from "class-transformer";

@Controller("/products")
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    create(@Body() productDto: ProductDto) {
        const product = plainToClass(Product, productDto);
        return this.service.create(product);
    }

    @Delete()
    delete(@Body() product){
        const { id } = product;

        return this.service.delete(id);
    }

    @Put()
    update(@Body() product){
        return this.service.update(product);
    }
}