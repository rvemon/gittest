import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GittestService{

    public url: string;

    constructor(private _http: HttpClient){
        this.url = 'https://api.github.com/repos/rvemon/gittest';
    }

    getBranches():Observable<any>{
        return this._http.get(this.url+'/branches')
    }
    
    getCommits(branch):Observable<any>{
        return this._http.get(this.url+'/commits?sha='+branch)
    }
}