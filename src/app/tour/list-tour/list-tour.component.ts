import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from '../tour.service';

interface DataItem {
  id: number;
  name: string;
  category: string;
  price: number;
  address: string;
  region: string;
  schedule: string;
  description: string;
}

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css']
})
export class ListTourComponent implements OnInit {
  displayData:any[] = [];
  loading = true;

  constructor(private tourService : TourService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTour()
    console.log(this.displayData)
}

getAllTour() {
  this.tourService.getTour().subscribe({
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

goInfo(id: string): void {
  this.router.navigate([`/tour/${id}`]); 
}

}
