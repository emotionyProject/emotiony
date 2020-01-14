import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDownloadComponent } from './footer-download.component';

describe('FooterDownloadComponent', () => {
  let component: FooterDownloadComponent;
  let fixture: ComponentFixture<FooterDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
