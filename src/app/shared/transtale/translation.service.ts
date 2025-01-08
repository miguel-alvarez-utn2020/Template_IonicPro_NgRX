import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Language } from './language.enum';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  defaultLang = Language.ES;

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  initLang() {
    this.translateService.setDefaultLang(this.defaultLang);
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(Language.STORAGE_KEY) as Language;
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.translateService.use(this.defaultLang);
    }
  }

  changeLang(lang: Language) {
    this.translateService.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(Language.STORAGE_KEY, lang);
    }
  }
}