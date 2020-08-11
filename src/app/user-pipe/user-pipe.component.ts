import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pipe',
  templateUrl: './user-pipe.component.html',
  styleUrls: ['./user-pipe.component.scss']
})
export class UserPipeComponent implements OnInit {
  test1:string = '{{2 | exponentialStrength: 10}}:   ';
  constructor() { }

  ngOnInit(): void {
  }

}
