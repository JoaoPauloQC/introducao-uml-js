export class Fornecedor {
    
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