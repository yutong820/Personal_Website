import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models/blogPost';
import { blogs } from '../../content/blogPosts';
import { FilterPostsService } from 'src/app/core/services/filter-posts.service';
import { Router } from '@angular/router';
import { topics } from '../../content/topics';

@Component({
  selector: 'app-blog-displayer',
  templateUrl: './blog-displayer.component.html',
  styleUrls: ['./blog-displayer.component.scss']
})
export class BlogDisplayerComponent {

  @Input() displayBlogs: Array<BlogPost> = []

  blogs: Array<BlogPost> = []

  otherBlogs: Array<BlogPost> = [];

  optionBar: string[] = [...topics];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.displayPostByRoute();
    });
  }

  ngOnInit() {
    document.getElementById("blog-options")!.style.display = "none";
    if (this.displayBlogs.length == 0) {
      this.limitPostsToShow(3);
    }

    if (window.location.pathname.includes("/blogs")) {
      this.displayDefaultPosts();
      this.displayPostByRoute();
    }
  }

  limitPostsToShow(amount: number): void {
    for (let blog of blogs) {
      if (this.displayBlogs.length > amount) {
        break;
      }
      this.displayBlogs.push(blog);
    }
  }

  displayDefaultPosts(): void {
    this.displayBlogs = blogs;
    document.getElementById("blog-options")!.style.display = "block";
    document.querySelector("meta[name='keywords']" )!.setAttribute("content", "Gabriele Gatti, Gabriele, Gabri432");
    document.querySelector("meta[name='description']" )!.setAttribute("content", "A personal website and blog made with Angular 16+ by Gabriele Gatti");
  }

  displayPostByRoute(): void {
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "https://gabri432.github.io" + location.pathname);
    if (window.location.pathname.includes("/blogs/")) {
      const chosenOption = window.location.pathname.replace("/angular-personal-website/blogs/", "").replace("/", "");
      if (chosenOption != "") {
        this.displayBlogs = FilterPostsService.filterBlogs(chosenOption);
      }
    }
  }

  changeRoute(route: string) {
    window.location.href = "/angular-personal-website" + route + '/.';
  }
}
