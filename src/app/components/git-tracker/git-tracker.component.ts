import { Component, OnInit } from '@angular/core';
import { GittestService } from 'src/app/services/gittest.service';

@Component({
  selector: 'git-tracker',
  templateUrl: './git-tracker.component.html',
  styleUrls: ['./git-tracker.component.css'],
  providers: [GittestService]
})
export class GitTrackerComponent implements OnInit {

  constructor(private _githistory: GittestService) { 
    
  }

  ngOnInit(): void {

    this._githistory.getAccessToken().subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
