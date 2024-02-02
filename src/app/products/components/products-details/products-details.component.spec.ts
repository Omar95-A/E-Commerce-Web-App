import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsComponent } from './products-details.component';

describe('ProductsDetailsComponent', () => {
  let component: ProductsDetailsComponent;
  let fixture: ComponentFixture<ProductsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
