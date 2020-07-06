import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Order } from "src/order/order.entity";

@Entity ({ name : 'customers' })
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome', type: 'varchar', length: 30 })
    nome: string;

    @Column({ name: 'cpf', type: 'varchar', length: 14 })
    cpf: string;

    @Column({name: 'rg', type: 'varchar', length: 12 })
    rg: string

    @Column({ name: 'endereco', type: 'varchar', length: 50 })
    endereco: string;

    @Column({ name: 'bairro', type: 'varchar', length: 20 })
    bairro: string;

    @Column({ name: 'cidade', type: 'varchar', length: 20 })
    cidade: string;

    @Column({ name: 'cep', type: 'varchar', length: 9 })
    cep: string;

    @OneToMany(type => Order, order => order.customer)
    orders: Order[];

}