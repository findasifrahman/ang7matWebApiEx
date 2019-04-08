import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdataListComponent } from './productdata-list.component';

describe('ProductdataListComponent', () => {
  let component: ProductdataListComponent;
  let fixture: ComponentFixture<ProductdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
