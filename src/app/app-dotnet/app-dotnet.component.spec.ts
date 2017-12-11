import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDotnetComponent } from './app-dotnet.component';

describe('AppDotnetComponent', () => {
  let component: AppDotnetComponent;
  let fixture: ComponentFixture<AppDotnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDotnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
