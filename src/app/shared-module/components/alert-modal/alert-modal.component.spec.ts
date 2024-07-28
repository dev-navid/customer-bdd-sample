import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertModalComponent} from './alert-modal.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

describe('AlertModalComponent', () => {
  let component: AlertModalComponent;
  let fixture: ComponentFixture<AlertModalComponent>;
  // mocked MatDialogData because of 'No provider for MatDialogData' error:
  const mockDialogData = {
    role: {
      split: () => {
      } // or return whatever you want as a function
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertModalComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockDialogData
        },
      ]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have text', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="alert-text"]')).toBeTruthy();
  });
  it('should have dismiss button', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="alert-dismiss"]')).toBeTruthy();
  });
});
