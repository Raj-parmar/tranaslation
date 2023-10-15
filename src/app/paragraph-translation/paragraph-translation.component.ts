import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-paragraph-translation',
  templateUrl: './paragraph-translation.component.html',
  styleUrls: ['./paragraph-translation.component.scss']
})
export class ParagraphTranslationComponent {
  originalText: string = '';
  targetLang: string = 'en';
  translatedText: string = '';

  constructor(private translationService: TranslationService) {}

  translateParagraph() {
    this.translationService.translate(this.originalText, this.targetLang).subscribe((response: any) => {
      this.translatedText = response[0][0][0];
    });
  }
}
