import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dS: DataService) { }

  ngOnInit(): void {
  }
  
}
