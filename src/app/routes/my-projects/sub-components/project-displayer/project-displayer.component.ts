import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-displayer',
  templateUrl: './project-displayer.component.html',
  styleUrls: ['./project-displayer.component.scss']
})
export class ProjectDisplayerComponent {
    @Input() proj!: Project;

    ngOnInit(): void {
      document.querySelector("meta[name='keywords']" )!.setAttribute("content", "Gabriele Gatti, Gabriele, Gabri432");
      document.querySelector("meta[name='description']" )!.setAttribute("content", "A personal website and blog made with Angular 16+ by Gabriele Gatti");
      if (location.pathname.includes("projects")) {
        document.querySelector("link[rel='canonical']")!.setAttribute("href", "https://gabri432.github.io/angular-personal-website/projects/");
      }
    }
}
