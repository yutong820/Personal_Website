import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes/routes.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {Location} from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    CoreModule,
    RoutesModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const __stripTrailingSlash = (Location as any).stripTrailingSlash; 
Location.stripTrailingSlash = function (url) {  
  if (!url.endsWith('/')) {  
    url=url + '/';  
  } 
  const queryString$ = url.match(/([^?]*)?(.*)/) as RegExpMatchArray;
  if (queryString$[2].length > 0) {  
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
  }  
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
};
