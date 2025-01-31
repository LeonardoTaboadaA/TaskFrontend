import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [],
  exports:[
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
