import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdataUpdateComponent } from './productdata-update.component';

describe('ProductdataUpdateComponent', () => {
  let component: ProductdataUpdateComponent;
  let fixture: ComponentFixture<ProductdataUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdataUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
