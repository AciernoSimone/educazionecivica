import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelComponent } from './rel.component';

describe('RelComponent', () => {
  let component: RelComponent;
  let fixture: ComponentFixture<RelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
