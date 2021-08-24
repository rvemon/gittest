import { Component, OnInit } from '@angular/core';
import { GittestService } from 'src/app/services/gittest.service';

@Component({
  selector: 'git-tracker',
  templateUrl: './git-tracker.component.html',
  styleUrls: ['./git-tracker.component.css'],
  providers: [GittestService]
})
export class GitTrackerComponent implements OnInit {

  public branches_names: string[];
  public commits: any[];
  public name: string = '';

  constructor(private _githistory: GittestService) { 
    
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._githistory.getUser().subscribe(
      response =>{
        console.log(response);
        this.name = response.name;
        this.setUser(this.name);
      },
      error =>{
        console.log(error);
      }
    );
  }

  setUser(name){
    this._githistory.setUser(name);
    this.getBranches();
  }

  getBranches(){
    this._githistory.getBranches().subscribe(
      response =>{
        console.log(response);
        this.branches_names = response;
        this.getCommits(response);
      },
      error =>{
        console.log(error);
        this.branches_names = [];
      }
    );
  }

  getCommits(response){
    var arr = [];

    for(let i=0;i<response.length; i++){
      let branch = response[i].name;
      this._githistory.getCommits(branch).subscribe(
        response =>{
          console.log(response);
          arr.push(response);
  
        },
        error =>{
          console.log(error);
        }
      );
    }
    this.commits = arr;
  }

}
