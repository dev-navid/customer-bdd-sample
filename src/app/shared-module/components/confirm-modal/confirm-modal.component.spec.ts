import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmModalComponent} from './confirm-modal.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  // mocked MatDialogData because of 'No provider for MatDialogData' error:
  const mockDialogData = {
    role: {
      split: () => {
      } // or return whatever you want as a function
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmModalComponent],
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
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="confirm-title"]')).toBeTruthy();
  });
  it('should have description', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="confirm-description"]')).toBeTruthy();
  });
  it('should have confirm button', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="confirm-yes"]')).toBeTruthy();
  });
  it('should have dismiss button', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="confirm-no"]')).toBeTruthy();
  });
});
