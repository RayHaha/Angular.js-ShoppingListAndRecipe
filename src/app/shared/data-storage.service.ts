// theoretically, @injectable is optional, you don;t need to add it to your services
// but you need to add it as soon as your service gets another service injected

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient){

    }
}