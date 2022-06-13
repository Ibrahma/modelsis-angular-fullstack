import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeproductComponent } from './add-typeproduct.component';

describe('AddTypeproductComponent', () => {
  let component: AddTypeproductComponent;
  let fixture: ComponentFixture<AddTypeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
