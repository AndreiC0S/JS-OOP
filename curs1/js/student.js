class Student {
    nota1 = 0;
    nota2 = 0;
    constructor(id, nume, varsta){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        
    }
    salut(){
        console.log(`${this.nume} a salutat`)
    }
    examen(nota1,nota2){
        this.nota1 = nota1;
        this.nota2 = nota2;
        console.log(`studentul ${this.nume}a luat nota ${this.nota1} si ${this.nota2}`)
    }
    calcMedia(){
        let media = (this.nota1 + this.nota2) / 2;
        console.log(`Media lui ${this.nume} este ${media}`)
    }
}

