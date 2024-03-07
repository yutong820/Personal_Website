import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';
import { BlogComponent } from './routes/blog/blog.component';
import { BlogDisplayerComponent } from './routes/blog/sub-components/blog-displayer/blog-displayer.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'About Gabriele Gatti'},
  {path: 'projects/.', component: MyProjectsComponent, title: 'My Projects'},
  {path: 'blogs/.', component: BlogDisplayerComponent, title: 'My Blogs'},
  {path: 'blogs/:topic/.', component: BlogDisplayerComponent, title: 'My Blogs'},
  {path: 'blog/:topic/:title/.', component: BlogComponent, title: 'My Blogs'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
