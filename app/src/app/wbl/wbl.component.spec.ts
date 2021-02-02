import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WblComponent } from './wbl.component';

describe('WblComponent', () => {
  let component: WblComponent;
  let fixture: ComponentFixture<WblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
