import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDisplayerComponent } from './blog-displayer.component';

describe('BlogDisplayerComponent', () => {
  let component: BlogDisplayerComponent;
  let fixture: ComponentFixture<BlogDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDisplayerComponent]
    });
    fixture = TestBed.createComponent(BlogDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
