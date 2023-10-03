import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSublistComponent } from './add-new-sublist.component';

describe('AddNewSublistComponent', () => {
  let component: AddNewSublistComponent;
  let fixture: ComponentFixture<AddNewSublistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewSublistComponent]
    });
    fixture = TestBed.createComponent(AddNewSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
