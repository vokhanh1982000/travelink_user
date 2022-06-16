import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare const Script: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor() { 

  }

  ngOnInit(): void {
    
  }
  onLogin() {
    this.isVisible = false;
  }
}
