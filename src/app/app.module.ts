import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_CONTAINER_MODULES } from './containers';
import { CoreModule } from './core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    CoreModule,
    ...APP_CONTAINER_MODULES,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
