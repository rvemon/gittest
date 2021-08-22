import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTrackerComponent } from './git-tracker.component';

describe('GitTrackerComponent', () => {
  let component: GitTrackerComponent;
  let fixture: ComponentFixture<GitTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
