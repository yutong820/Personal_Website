import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectDisplayerComponent } from './my-projects/sub-components/project-displayer/project-displayer.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogDisplayerComponent } from './blog/sub-components/blog-displayer/blog-displayer.component';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    MyProjectsComponent,
    ProjectDisplayerComponent,
    BlogComponent,
    BlogDisplayerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ]
})
export class RoutesModule { }
