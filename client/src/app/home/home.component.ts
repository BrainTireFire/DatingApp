import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeMode = false; // Show and hide home page 
  registerMode = false;
  learnMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.homeMode = !this.homeMode;
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.homeMode = event;
    this.registerMode = event;
  }

  //learn more page
  learnMoreToggle() {
    this.homeMode = !this.homeMode;
    this.learnMode = !this.learnMode;
  }

  comeBackHomeMode(event: boolean) {
    this.homeMode = event;
    this.learnMode = event;
  }
}
