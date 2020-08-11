import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  test1: string = '{{ birthday | date }}:   ';
  test2: string = '{{ birthday | date:"MM/dd/yy" }}:   ';
  test3: string = '{{ birthday | date:"shortDate" }}:   ';
  test4: string = '{{ birthday | date:"fullDate" }}:   ';
  test5: string = '{{  birthday | date:"fullDate" | uppercase}}:     ';

  //
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
