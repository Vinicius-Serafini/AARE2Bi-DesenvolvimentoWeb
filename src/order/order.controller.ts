import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { OrderItem } from "src/orderItem/orderItem.entity";


@Controller("/orders")
export class OrderController {

    constructor(private readonly service: OrderService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    create(@Body() orderBody) {

       const {codigo, data, dataEntrega, transportadora, valorDesconto, enderecoEntrega, cliente, orderItens } = orderBody;

       let  totalProdutos = orderItens.reduce((totalValue, initOrderItem) => {
           return totalValue + initOrderItem.valorTotal 
        }, 0);
    
        const order = new Order();
        order.codigo = codigo;
        order.data = data;
        order.dataEntrega = dataEntrega;
        order.transportadora = transportadora;
        order.valorDesconto = valorDesconto;
        order.enderecoEntrega = enderecoEntrega;
        order.customer = cliente;
        order.valorProdutos = totalProdutos;
        order.valorTotal = order.valorProdutos - order.valorDesconto;
        
        const arrOrderItems = orderItens.map((index) => {
            let orderItem = new OrderItem();
            orderItem.order = order;
            orderItem.product = index.product;
            orderItem.quantidade = index.quantidade;
            orderItem.valorTotal = index.valorTotal;

            return orderItem;
        })

        return this.service.create(arrOrderItems);
        
    }

    @Delete()
    delete(@Body() order){
        const { id } = order;
        
        return this.service.delete(id);
    }

    @Put()
    update(@Body() order){
        return this.service.update(order);
    }
}