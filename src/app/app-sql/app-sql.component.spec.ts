import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSqlComponent } from './app-sql.component';

describe('AppSqlComponent', () => {
  let component: AppSqlComponent;
  let fixture: ComponentFixture<AppSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
