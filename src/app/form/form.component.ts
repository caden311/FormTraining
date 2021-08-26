import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form1: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.initFormBuilder();
    // this.initManually();

  }

  private initFormBuilder() {
  }

  private initManually() {
  }



  public saveForm() {
    // POST(this.form1.getRawValue());
  }

}
