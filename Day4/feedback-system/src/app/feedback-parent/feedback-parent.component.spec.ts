import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackParentComponent } from './feedback-parent.component';

describe('FeedbackParentComponent', () => {
  let component: FeedbackParentComponent;
  let fixture: ComponentFixture<FeedbackParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
