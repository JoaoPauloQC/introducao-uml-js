import { Fornecedor } from "./Fornecedor.js"

export class FornecedorEmpresa extends Fornecedor{

    #cnpj
    #ie

    constructor(nome,fone,ie,cnpj){
        super(nome,fone)
        this.#ie = ie
        this.#cnpj = cnpj
    }
    setCnpj(novoCnpj){
        this.#cnpj = novoCnpj
    }
    setIe(novoIe){
        this.#ie = novoIe
    }
    getCnpj(){
        return this.#cnpj
    }
    getIe(){
        return this.#ie
    }


}