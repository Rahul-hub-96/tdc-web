import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedBlogComponent } from './bookmarked-blog.component';

describe('BookmarkedBlogComponent', () => {
  let component: BookmarkedBlogComponent;
  let fixture: ComponentFixture<BookmarkedBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
