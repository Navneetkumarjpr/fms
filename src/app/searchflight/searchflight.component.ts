import { Component, Input,OnInit } from '@angular/core';
import { searchflight } from './search';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchflightsService } from '../service/searchflights.service';
import { FlightModel } from '../model/flightModel';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit{
  searchflight: undefined | FlightModel[]
  @Input() searchResults =new FlightModel();
  flightresult:undefined
  // icon = faTrash;
  // iconEdit=faEdit;
  productMessage:string=''
  constructor(private router:Router, private http:HttpClient, private flight:SearchflightsService){

  }
  ngOnInit(): void {
    this.list();
  }

  deleteflight(id: number) {
    this.flight.deleteFlight(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }

  list() {
    this.flight.flightList().subscribe((result) => {
      if (result) {
        console.log(result)
        this.searchflight = result;
      }
    });
  }

  // ViewDetails(data:number)
  // {
  //  this.router.navigate([`flightbooking/${data}`]) 
  // }

}
 