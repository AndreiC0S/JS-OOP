class Animal {
    #familie;
    #mancare;
    #culoare;
    greutate;
    nrPicioare;
    
    constructor(greutate, nrPicioare){
        this.greutate = greutate;
        this.nrPicioare = nrPicioare;
    }

    mananca(cantitate){
        console.log(`Consum de ${cantitate} kg mancare`)
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore`)
    }
    comunica(mesaj){
        console.log(`${this.nume} zice: ${mesaj}`)
    }

    get familie(){
        return this.#familie;
    }
    set familie(myFam){
        this.#familie = myFam;
    }
}
export { Animal }
