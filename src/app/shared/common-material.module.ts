import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const mat = [
  MatIconModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [...mat],
  exports: [...mat],
})
export class CommonMaterialModule {}
