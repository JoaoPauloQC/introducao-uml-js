import { FornecedorPessoa } from "./FornecedorPessoa.js"
import { FornecedorEmpresa } from "./FornecedorEmpresa.js"

const imprimir = (arrayDeFornecedores) =>{

    for (let fornecedor of arrayDeFornecedores ){
    
        try{
            console.log(
                `
                Nome da Empresa: ${fornecedor.getNome()}
                Telefone da Empresa: ${fornecedor.getFone()}
                Ie da Empresa: ${fornecedor.getIe()}
                Cnpj da Empresa: ${fornecedor.getCnpj()}
                `
            )
        }
        catch{
            console.log(
                `
                Nome da pessoa: ${fornecedor.getNome()}
                Telefone da pessoa: ${fornecedor.getFone()}
                Cpf da pessoa: ${fornecedor.getCpf()}
                Rg da pessoa: ${fornecedor.getRg()}
                `
            )   
        }
    }
}

let Petrobras = new FornecedorEmpresa("Petrobras", 2132345678, "12345-000", 2)
let Vale = new FornecedorEmpresa("Vale S.A.", 3138765432, "45678-000", 3)
let Eletrobras = new FornecedorEmpresa("Eletrobras", 21987654321, "78901-000", 4)
let Natura = new FornecedorEmpresa("Natura", 11234567890, "13579-000", 5)
let Ambev = new FornecedorEmpresa("Ambev", 11456789012, "24680-000", 6)
let Maria = new FornecedorPessoa("Maria Silva", "11999887766", "12345678X", "987654321-00")
let João = new FornecedorPessoa("João Pereira", "11988776655", "87654321X", "123123123-99")
let Ana = new FornecedorPessoa("Ana Souza", "11977665544", "76543210X", "321321321-88")
let Carlos = new FornecedorPessoa("Carlos Lima", "11966554433", "65432109X", "456456456-77")
let Beatriz = new FornecedorPessoa("Beatriz Ramos", "11955443322", "54321098X", "789789789-66")
let arrayDeFornecedores = [
  Petrobras, Vale, Eletrobras, Natura, Ambev,
  Maria, João, Ana, Carlos, Beatriz
]
imprimir(arrayDeFornecedores)

