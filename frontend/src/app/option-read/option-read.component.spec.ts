import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionReadComponent } from './option-read.component';

describe('OptionReadComponent', () => {
  let component: OptionReadComponent;
  let fixture: ComponentFixture<OptionReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
