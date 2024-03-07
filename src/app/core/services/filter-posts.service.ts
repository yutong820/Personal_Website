import { Injectable } from '@angular/core';
import { blogs } from 'src/app/routes/blog/content/blogPosts';
import { BlogPost } from 'src/app/routes/blog/models/blogPost';

@Injectable({
  providedIn: 'root'
})
export class FilterPostsService {

  constructor() { }

  static filterBlogs(topic: string) {
    let filteredBlogs: BlogPost[] = [];
    for (let blog of blogs) {
      if (blog.topics.includes(topic)) {
        filteredBlogs.push(blog);
      }
    }
    return filteredBlogs;
  }
}
