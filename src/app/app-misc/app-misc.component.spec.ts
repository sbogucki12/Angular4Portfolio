import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMiscComponent } from './app-misc.component';

describe('AppMiscComponent', () => {
  let component: AppMiscComponent;
  let fixture: ComponentFixture<AppMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
