import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCheckComponent } from './delete-check.component';

describe('DeleteCheckComponent', () => {
  let component: DeleteCheckComponent;
  let fixture: ComponentFixture<DeleteCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCheckComponent]
    });
    fixture = TestBed.createComponent(DeleteCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
