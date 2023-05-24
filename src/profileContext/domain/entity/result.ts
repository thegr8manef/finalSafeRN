export class result{
    private accessToken : string
    private account : account

    constructor(
         accessToken : string,
         account : account,
     
    ){
            this.accessToken = accessToken
            this.account = account
    }

     getToken() : string{
        return this.accessToken
    }
    getAccount(): account{
        return this.account
    }

}


 class account{
    constructor(
        private claims : claims,
        private username : string
     
    ){

    }

    getClaims() : claims{
        return this.claims
    }
    getUsername() : string{
        return this.username
    }

}

class claims{
    constructor(
        private aud : undefined,
        private iss : string,
        private name: string,
        private oid : string,
        private preferred_username : string 

     
    ){

    }

    getAud() : undefined{
        return this.aud
    }

    getIss() : string{
        return this.iss
    }
    getName() : string{
        return this.name
    }
    getOid(): string{
        return this.oid
    }
    getPreferred_username() : string {
        return this.preferred_username
    }

}