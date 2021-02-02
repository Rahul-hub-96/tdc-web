import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesKitInnerComponent } from './bundles-kit-inner.component';

describe('BundlesKitInnerComponent', () => {
  let component: BundlesKitInnerComponent;
  let fixture: ComponentFixture<BundlesKitInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundlesKitInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlesKitInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
