import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddCustomerModalComponent} from "./add-customer-modal.component";

describe('AddCustomerModalComponent', () => {
  let component: AddCustomerModalComponent;
  let fixture: ComponentFixture<AddCustomerModalComponent>;

  // mocked MatDialog because of 'No provider for MatDialog' error:
  let matDialogService: jasmine.SpyObj<MatDialog>;
  matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);


  // mocked MatDialogRef because of 'No provider for MatDialogRef' error:
  let matDialogData: jasmine.SpyObj<MatDialogRef<any>>;

  // mocked MatDialogData because of 'No provider for MatDialogData' error:
  const mockDialogData = {
    role: {
      split: () => {
      } // or return whatever you want as a function
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCustomerModalComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialogService,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockDialogData
        },
        {
          provide: MatDialogRef,
          useValue: matDialogData
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have customer register form', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="add-firstname"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-cy="add-lastname"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-cy="add-date-of-birth"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-cy="add-phone-number"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-cy="add-email"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-cy="add-bank-account-number"]')).toBeTruthy();
  });
  it('Should have submit button', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="add-submit"]')).toBeTruthy();
  });
  it('Should have back button', () => {
    expect(fixture.nativeElement.querySelector('[data-cy="add-back"]')).toBeTruthy();
  });
});
