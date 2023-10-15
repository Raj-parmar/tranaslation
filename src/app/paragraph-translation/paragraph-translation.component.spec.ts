import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphTranslationComponent } from './paragraph-translation.component';

describe('ParagraphTranslationComponent', () => {
  let component: ParagraphTranslationComponent;
  let fixture: ComponentFixture<ParagraphTranslationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphTranslationComponent]
    });
    fixture = TestBed.createComponent(ParagraphTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
