import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){

    }
    
    signup(email: string, password: string){
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDcMFC4JAx2TW6e9HTWTi6EUGwj-6xWKQY',{
            email: email,
            password: password,
            returnSecureToken: true
        });
    }
}