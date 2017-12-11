import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEntityFrameworkComponent } from './app-entity-framework.component';

describe('AppEntityFrameworkComponent', () => {
  let component: AppEntityFrameworkComponent;
  let fixture: ComponentFixture<AppEntityFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEntityFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEntityFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
