import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import { Observable, throwError } from 'rxjs';
import "rxjs/Rx";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
    private userDeatils: User[] = [];
    private apiUrl = 'https://randomuser.me/api/';
    //'https://jsonplaceholder.typicode.com/posts';
     

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }

    constructor(private http: HttpClient) {}

    public getDataFromRandomAPI() {
        return this.http.get(this.apiUrl);
    }

    public fetchDataFromRandomAPI() {
        return this.http.get(this.apiUrl).pipe(map(
            (responseData: {[key: string]: User }) => {
                const dataArray: User[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        dataArray.push({ ...responseData[key]})
                    }  
                }
                return dataArray;
            }
        )).subscribe( apiData => {
            console.log(apiData[0][0].gender);
        })
    }


    // getPosts(): Observable<User[]> {
    //     return this.http
    //         .get(this.apiUrl)
    //         .map((response: Response) => {
    //             return <User[]>response.json();
    //         })
    //         .catch(this.handleError);
    // }
    
}