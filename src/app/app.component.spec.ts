import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have header', () => {
    expect(fixture.nativeElement.querySelector('[data-test="app-header"]')).toBeTruthy();
  });

  it('should have customer list', () => {
    expect(fixture.nativeElement.querySelector('[data-test="app-customer-list"]')).toBeTruthy();
  });
});
