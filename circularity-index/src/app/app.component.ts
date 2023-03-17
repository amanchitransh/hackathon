import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carList: any = ['BMW', 'MERC', 'Audi'];
  componentList: any = ['Chassis','engine'];
  public carName = "";
  public componentName = "";
  public visibleDiv = false;
  public visibleDiv1 = false;
  public replacementComponentName = "";

  constructor(private router: Router) { }

  form = new FormGroup({
    carModel: new FormControl('',Validators.required),
    component: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.carName= String(this.form.value.carModel);
    this.componentName = String(this.form.value.component);
    this.replacementComponentName = String(this.form.value.component);
    this.toggleDisplayDiv();
  }

  toggleDisplayDiv() {
    this.visibleDiv = !this.visibleDiv;
  }

  toggleDisplayDiv1() {
    this.visibleDiv1 = !this.visibleDiv1;
  }

  onClick(){
    this.componentName = String(this.form.value.component);
    this.toggleDisplayDiv1();
  }

}
