import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HomeService } from './home.service';

// declare const 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayData:any[] = [];
  loading = true;
  selectedAddress: any;
  selectedPeople: any;
  selectedDay: any;
  constructor(private formBuilder : FormBuilder, private homeService : HomeService, private router: Router) { }
  searchForm !: FormGroup;
  dateFormat = 'dd/MM/yyyy';
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      address: [''],
      slot: [''],
      checkIn: [''],
      duration: [''],
    })
    this.getAllTour()
  }
  onSearch() {
    if(this.searchForm.valid) {
        // this.tourService.createTour(form.value).subscribe({
        //     next:(res)=>{
        //         this.message.create("success", "Tour added successfully")
        //         form.reset();
        //     },
        //     error:()=>{
        //         this.message.create("error", "Error while adding the product")
        //     }
        // })
    }
  }

  getAllTour() {
    this.homeService.getTour().subscribe({
      next:(res) =>  {
        this.displayData = res.content
        this.loading = false;
      },
      error:(err)=>{
        alert("Error while fetching the Records")
        this.loading = false;
      }
    })
  }
}
