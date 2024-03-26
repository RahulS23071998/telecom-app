import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = new User();
  dataList: { code: number; name: string; }[];

  dataList1: { code: number; name: string; }[];

  constructor() {

    this.dataList = [
      { code: 1, name: "shohel" },
      { code: 2, name: "rana" },
      { code: 3, name: "shipon" }
    ]

    this.dataList1 = [
      { code: 1, name: "shohel" },
      { code: 2, name: "rana" },
      { code: 3, name: "shipon" }
    ]
    
  }

  ngOnInit() {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
  }

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  })

  onSubmit() {
    
  }

}



