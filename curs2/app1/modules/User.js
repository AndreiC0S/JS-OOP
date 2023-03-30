class User{
    _varsta; 
    #email;
    constructor(id,nume,email, varsta){
        this.id= id;
        this.nume = nume;
        this.#email = email;
        this._varsta  = varsta;
    }

    get myAge(){
        return this._varsta 
    }
    set myAge(varstaNoua){
        if (varstaNoua < 0){
            throw 'Erroare varsta'
            
        } else {
            this._varsta  = varstaNoua;
            // console.error('varsta incorecta')
        }
    }

    get myEmail(){
        console.log('sunt in geter de mail')
        return this.#email;
    }
    set myEmail(newEmail){
        console.log('sunt in seter de mail')
        if(newEmail === 'dan@dan.ro'){
            this.#email = newEmail;
        }else{
            throw 'Erroare email'
        }
        
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} calorii pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi adresa de mail este ${this.#email}`);
    }
}
export {User}
