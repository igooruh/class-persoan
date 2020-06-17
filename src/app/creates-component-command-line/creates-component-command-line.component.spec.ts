import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesComponentCommandLineComponent } from './creates-component-command-line.component';

describe('CreatesComponentCommandLineComponent', () => {
  let component: CreatesComponentCommandLineComponent;
  let fixture: ComponentFixture<CreatesComponentCommandLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesComponentCommandLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesComponentCommandLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
