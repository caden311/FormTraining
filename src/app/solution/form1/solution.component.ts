import { Component, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { validClient } from 'src/app/validators/client.validator';
import { isValidPhone } from 'src/app/validators/phone.validator';
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }

  public form1: FormGroup;
  public states = Utils.UnitedStates;
  public showAddress: FormControl;
  public showContactInfo: FormControl;
  private subscriptions = [];

  ngOnInit() {
    this.showAddress = new FormControl(false);
    this.showContactInfo = new FormControl(false);
    this.subscriptions.push(this.showAddress.valueChanges.subscribe(v => {
      if (v) {
        // this.form1.patchValue({address: {state: 'Utah'}});
        // Won't work because we aren't setting every property in the form..
        // this.form1.setValue({address: {state: 'Utah'}});
        //this.form1.setValue({name: '', username: '', phone: '', client: 'caden', address: {state: 'Utah', street:'123', city: '', zip:''}});
      }
    }));
    this.initFormBuilder();
 
    // this.initManually();

  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initFormBuilder() {
    this.form1 = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.minLength(4), Validators.required]],
      phone: ['', isValidPhone()],
      client: ['', null, validClient()],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      contacts: this.fb.array([
      ])
    });
    // Subscribe to all changes to form..
    this.form1.valueChanges.subscribe(val => {
    });
    this.form1.controls.name.valueChanges.subscribe((name) => {
    })
  }

  private initManually() {
    this.form1 = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
    })
  }


  public addContact() {
    (this.form1.controls.contacts as FormArray).push(this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('.*@.*')]]
    }));
  }

  public saveForm() {
    // POST(this.form1.getRawValue());
  }


}
