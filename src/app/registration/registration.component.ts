import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl('')
  });


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['Gender', [Validators.required]],
      role: ['Select job type', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this.usersService.createUser(this.regForm);
  }
}
