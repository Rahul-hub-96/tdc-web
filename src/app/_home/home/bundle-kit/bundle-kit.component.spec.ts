import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleKitComponent } from './bundle-kit.component';

describe('BundleKitComponent', () => {
  let component: BundleKitComponent;
  let fixture: ComponentFixture<BundleKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
