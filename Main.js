import { FornecedorPessoa } from "./FornecedorPessoa.js"
import { FornecedorEmpresa } from "./FornecedorEmpresa.js"



let Sabesp = new FornecedorEmpresa("Sabesp",11910000000,"03557-000",1)
let Jose = new FornecedorPessoa("José", "11950806063", "50720983X","123456789-01")

console.log(
    `
    Nome: ${Sabesp.getNome()}
    Fone: ${Sabesp.getFone()}
    Ie: ${Sabesp.getIe()}
    Cnpj: ${Sabesp.getCnpj()}
    `
)
console.log(
    `
    Nome: ${Jose.getNome()}
    Fone: ${Jose.getFone()}
    Cpf: ${Jose.getCpf()}
    Rg: ${Jose.getRg()}
    `
)