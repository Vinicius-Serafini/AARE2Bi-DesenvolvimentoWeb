import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { OrderItem } from "src/orderItem/orderItem.entity";

@Entity ({ name : 'products' })
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome', type: 'varchar', length: 25 })
    nome: string;

    @Column({ name: 'descricao', type: 'varchar', length: 100 })
    descricao: string;
    
    @Column({ name: 'preco', type: 'decimal' })
    preco: number;

    @Column({ name: 'estoque', type: 'decimal'})
    estoque: number;

    @Column({ name: 'dataValidade', type: 'date'})
    dataValidade: Date;

    @Column({ name: 'unidadeMedida', type: 'varchar', length: 2 })
    unidadeMedida: string;

    @ManyToMany(type => OrderItem, orderItem => orderItem.product)
    orderItem: OrderItem[];

}