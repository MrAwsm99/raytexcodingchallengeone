import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  minDate: Date = new Date (2022, 3, 1);
maxDate: Date = new Date (2022, 3, 15);

}
