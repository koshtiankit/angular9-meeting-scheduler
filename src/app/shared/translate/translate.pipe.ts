import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'; // our translate service

@Pipe({
  name: 'translate',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  constructor(private _translate: TranslateService) {}

  transform(value: string, lang: string): any {
    if (!value || !lang) return;
    return this._translate.instant(value);
  }
}
