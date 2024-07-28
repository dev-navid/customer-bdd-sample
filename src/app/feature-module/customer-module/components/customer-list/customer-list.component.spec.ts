import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerListComponent} from './customer-list.component';
import {MatDialog} from "@angular/material/dialog";

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  // mocked MatDialog because of 'No provider for MatDialog' error:
  let matDialogService: jasmine.SpyObj<MatDialog>;
  matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialogService,
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have add customer button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-add-btn"]')).toBeTruthy();
  });

  it('Should have customers list table', () => {
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-position"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-position"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-firstname"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-lastname"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-date-of-birth"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-phone-number"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-email"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-bank-account-number"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-edit"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="customer-list-delete"]')).toBeTruthy();
  });
});
