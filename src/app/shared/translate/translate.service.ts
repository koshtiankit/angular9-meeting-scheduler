import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
  private currentLang: string = 'en';

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) {}

  public use(lang: string): void {
    // set current language
    this.currentLang = lang;
  }

  private translate(key: string): string {
    if (
      this._translations[this.currentLang] &&
      this._translations[this.currentLang][key]
    ) {
      return this._translations[this.currentLang][key];
    }

    return key;
  }

  public instant(key: string) {
    return this.translate(key);
  }
}
