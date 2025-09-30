import { Fornecedor } from "./Fornecedor.js"

export class FornecedorPessoa extends Fornecedor{

    #rg
    #cpf

    constructor(nome,fone,rg,cpf){
        super(nome,fone)
        this.#rg = rg
        this.#cpf = cpf
    }
    setCpf(novoCpf){
        this.#cpf = novoCpf
    }
    setRg(novoRg){
        this.#rg = novoRg
    }
    getCpf(){
        return this.#cpf
    }
    getRg(){
        return this.#rg
    }


}