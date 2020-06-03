import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from './common-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CommonService, UtilService } from './services';
import {
  TranslatePipe,
  TRANSLATION_PROVIDERS,
  TranslateService,
} from './translate';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [TranslatePipe],
  exports: [
    CommonModule,
    CommonMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  entryComponents: [],
  providers: [
    UtilService,
    CommonService,
    TranslateService,
    TRANSLATION_PROVIDERS,
    TranslatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class SharedModule {}
