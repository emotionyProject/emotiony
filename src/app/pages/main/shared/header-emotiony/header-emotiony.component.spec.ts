import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmotionyComponent } from './header-emotiony.component';

describe('HeaderEmotionyComponent', () => {
  let component: HeaderEmotionyComponent;
  let fixture: ComponentFixture<HeaderEmotionyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEmotionyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEmotionyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
