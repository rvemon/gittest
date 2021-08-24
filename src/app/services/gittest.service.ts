import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GittestService{

    public url: string;
    private _jsonUrl = 'assets/jsonconfig.json';
    private user: string ='';


    constructor(private _http: HttpClient){
        this.url = 'https://api.github.com/repos/';
    }

    getUser():Observable<any>{
        return this._http.get(this._jsonUrl)
    }

    setUser(user_){
        this.user = user_
    }

    getBranches():Observable<any>{
        return this._http.get(this.url+this.user+'/gittest/branches')
    }
    
    getCommits(branch):Observable<any>{
        return this._http.get(this.url+this.user+'/gittest/commits?sha='+branch)
    }
}