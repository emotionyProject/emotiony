import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastagBarComponent } from './hastag-bar.component';

describe('HastagBarComponent', () => {
  let component: HastagBarComponent;
  let fixture: ComponentFixture<HastagBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastagBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastagBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
