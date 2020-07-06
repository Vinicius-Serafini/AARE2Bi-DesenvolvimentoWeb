import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Product } from "src/product/product.entity";
import { Order } from "src/order/order.entity";

@Entity ({ name : 'orderitem' })
export class OrderItem{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Product, product => product.orderItem)
    @JoinColumn({ name: "product_id"})
    product: Product[];

    @ManyToOne(type => Order, order => order.orderItens, { cascade: true })
    @JoinColumn({ name: "order_id"})
    order: Order;

    @Column({ name: 'quantitidade', type: 'integer' })
    quantidade: number;

    @Column({ name: "valorTotal", type: "decimal"})
    valorTotal: number

}