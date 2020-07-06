import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderItem/orderItem.entity";


@Entity ({ name : 'orders' })
export class Order{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo', type: 'varchar', length: 100 })
    codigo: string;

    @Column({ name: 'data', type: 'date' })
    data: string;

    @Column({ name: 'dataEntrega', type: 'date'})
    dataEntrega: string;

    @Column({ name: 'transportadora', type: 'varchar', length: 50})
    transportadora: string;
    
    @Column({ name: 'valorTotal', type: 'decimal', })
    valorTotal: number;

    @Column({ name: 'valorProdutos', type: 'decimal', })
    valorProdutos: number;

    @Column({ name: 'valorDesconto', type: 'decimal'})
    valorDesconto: number;

    @ManyToOne(type => Customer, customer => customer.orders)
    @JoinColumn({ name: 'customer_id'})
    customer: Customer

    @Column({ name: 'enderecoEntrega', type: 'varchar', length: 100})
    enderecoEntrega: string;

    @OneToMany(type => OrderItem, orderItens => orderItens.order)
    orderItens: OrderItem[];
}