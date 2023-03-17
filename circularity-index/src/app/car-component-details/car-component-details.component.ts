import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-car-component-details',
  templateUrl: './car-component-details.component.html',
  styleUrls: ['./car-component-details.component.scss']
})
export class CarComponentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private appComponent: AppComponent) { }

  ngOnInit() {
    
  }

}
