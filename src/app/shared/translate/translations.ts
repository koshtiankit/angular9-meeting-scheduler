import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_TRANS } from '../translate/lang-en';
import { LANG_HN_TRANS } from '../translate/lang-hn';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all traslations
export const dictionary = {
  en: LANG_EN_TRANS,
  hn: LANG_HN_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];

// default language
export const DEFAULT_LANG = 'en';
