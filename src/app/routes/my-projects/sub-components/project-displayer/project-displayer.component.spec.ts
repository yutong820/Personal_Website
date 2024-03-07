import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDisplayerComponent } from './project-displayer.component';

describe('ProjectDisplayerComponent', () => {
  let component: ProjectDisplayerComponent;
  let fixture: ComponentFixture<ProjectDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDisplayerComponent]
    });
    fixture = TestBed.createComponent(ProjectDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
