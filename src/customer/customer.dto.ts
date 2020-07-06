import { IsString, Length } from 'class-validator';

export class CustomerDto {

    @IsString({message: 'O nome não é uma string válida'})
    @Length(10, 30, {message: 'O nome deve conter entre 10 e 30 caracteres '})
    nome: string;

    @IsString({message: 'O cpf não é uma string válida'})
    @Length(14, 14, {message: "O cpf deve ser escrito no formato xxx.xxx.xxx-xx"})
    cpf: string;

    @IsString({message: 'O campo rg não é uma string válida'})
    @Length(12, 12, {message: "O rg deve ser escrito no formato xx.xxx.xxx-x"})
    rg: string;

    @IsString({message: 'O campo endereco não é uma string válida'})
    @Length(10, 50, {message: 'O endereco deve conter entre 10 e 50 caracteres'})
    endereco: string;

    @IsString({message: 'O campo bairro não é uma string válida'})
    @Length(5, 20, {message: 'O bairro deve conter entre 5 e 20 caracteres'}) 
    bairro: string;

    @IsString({message: 'O campo cidade não é uma string válida'})
    @Length(5, 20, {message: 'A cidade deve conter entre 5 e 20 caracteres'})
    cidade: string;

    @IsString({message: 'O campo cep não é uma string válida'})
    @Length(9, 9, {message: "O cep deve ser escrito no formato xxxxx-xxx"})
    cep: string;

}