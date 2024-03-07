import { Component } from '@angular/core';
import { NonceGeneratorService } from 'src/app/core/services/nonce-generator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    //this.setNounce();
    this.changeURLcanonical();
  }

  setNounce(): void {
    NonceGeneratorService.generateNonce();
    let text = document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.getAttribute("content");
    if (text!.includes("sha512-")) {
      return;
    }
    text = text!.concat(";\nscript-src 'self' 'sha512-" + environment.nonce + "'");
    document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.setAttribute("content", text!);
  }

  changeURLcanonical(): void {
    console.log("before", document.querySelector("link[rel='canonical']")!.getAttribute("href"));
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "");
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "https://gabri432.github.io/angular-personal-website/");
    console.log("after", document.querySelector("link[rel='canonical']")!.getAttribute("href"));
  }

}
