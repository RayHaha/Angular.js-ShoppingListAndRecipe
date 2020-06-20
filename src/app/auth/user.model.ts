export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date
        ){

    }

    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
           // new Date() is a javascript feature, that's the current timestamp, not just a date but also the current time 
           return null;
        }
        return this._token;
    }
}