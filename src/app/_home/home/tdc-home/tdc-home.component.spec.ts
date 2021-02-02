import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdcHomeComponent } from './tdc-home.component';

describe('TdcHomeComponent', () => {
  let component: TdcHomeComponent;
  let fixture: ComponentFixture<TdcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
