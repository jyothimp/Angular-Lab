import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackChildComponent } from './feedback-child.component';

describe('FeedbackChildComponent', () => {
  let component: FeedbackChildComponent;
  let fixture: ComponentFixture<FeedbackChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
