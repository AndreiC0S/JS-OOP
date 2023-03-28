class Carte{
    static reducere = 10;
    myPret;
    constructor(titlu,autor,editura,an_aparitie,nr_pagini){
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        
        this.nr_pagini = nr_pagini;
    }
    get pret(){
        console.log('sunt in getter')
        return this.myPret;
    }
    set pret(pretNou){
        console.log('sunt in setter')
        try{
            if(pretNou <= 0){
                throw 'pretul nu poate fi actualizat'
            } else{
                this.myPret = pretNou;
            }
        }catch{
            console.error('f');
        }
        
    }
    // pretNou(){
    //     this.pret = this.pret -(Carte.reducere * this.pret) / 100
    // }
    obtine_titlu(){
        console.log(`titlu: ${this.titlu}`)
    }
    obtine_autor(){
        console.log(`autor: ${this.autor}`)
    }
    // modifica_pret(pretNou){
    //     this.pret = pretNou;
    //     console.log(`noul pret: ${this.pret}`)
    // }
    afiseaza_info(){
        console.log(`anul aparitiei: ${this.an_aparitie} si are ${this.nr_pagini} pagini`)
    }
    deschide_cartea(pag){
        if (pag <= this.nr_pagini){
            console.log(`ai deschis la pagina ${pag}`)
        } else {
            console.log('cartea nu are atatea pagini')
        }
    }
}





