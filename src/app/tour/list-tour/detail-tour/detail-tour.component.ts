import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { TourService } from '../../tour.service';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.css']
})
export class DetailTourComponent implements OnInit {
  displayData: any;
  loading = true;
  formatDate(dateOutput: Date) {
    const date = moment(dateOutput);
    let dateInFormat = date.format('D/M/YYYY');
    return dateInFormat;
}
  constructor(private route: ActivatedRoute, private tourService : TourService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getTourDetail();
  }
  getTourDetail() {
    if(this.route.snapshot.paramMap.get('id')) {
    this.tourService.getTourDetail(this.route.snapshot.paramMap.get('id') || "").subscribe({
      next:(res) =>  {
        this.displayData = res
        this.loading = false;
      },
      error:(err)=>{
        // alert("Error while fetching the Records")
        console.log("error")
        this.loading = false;
      }
    })}
  }
  goOrder(): void {
    this.router.navigate(["/order"]); 
  }
}
