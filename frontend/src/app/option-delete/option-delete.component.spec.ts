import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDeleteComponent } from './option-delete.component';

describe('OptionDeleteComponent', () => {
  let component: OptionDeleteComponent;
  let fixture: ComponentFixture<OptionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
