import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class FormModule { }
