class Fornecedor {
    
    constructor(nome,fone){
        this.nome = nome
        this.fone = fone
    }
    setNome(novoNome){
        this.nome = novoNome
    }
    setFone(novoFone){
        this.fone = novoFone
    }
    getNome(){
        return this.nome
    }
    getFone(){
        return this.fone
    }



}

class FornecedorPessoa extends Fornecedor{


    constructor(nome,fone,rg,cpf){
        super(nome,fone)
        this.rg = rg
        this.cpf = cpf
    }
    setCpf(novoCpf){
        this.cpf = novoCpf
    }
    setRg(novoRg){
        this.rg = novoRg
    }
    getCpf(){
        return this.cpf
    }
    getRg(){
        return this.rg
    }


}

class FornecedorEmpresa extends Fornecedor{


    constructor(nome,fone,ie,cnpj){
        super(nome,fone)
        this.ie = ie
        this.cnpj = cnpj
    }
    setCnpj(novoCnpj){
        this.cnpj = novoCnpj
    }
    setIe(novoIe){
        this.ie = novoIe
    }
    getCnpj(){
        return this.cnpj
    }
    getIe(){
        return this.ie
    }


}