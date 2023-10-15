import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private http: HttpClient, private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'fr', 'es']); // Add the languages you want to support
    this.translateService.setDefaultLang('en'); // Set the default language
  }

  translate(text: string, targetLang: string) {
    return this.http.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`);
  }

}
