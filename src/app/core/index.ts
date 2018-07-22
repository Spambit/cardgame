import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { APP_SERVICES } from './services';
import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import {  CORE_COMPONENTS } from './components';
import 'hammerjs';
import { NgxCarouselModule } from 'ngx-carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    BrowserModule,
    NgxCarouselModule,
    FormsModule
  ],
  declarations: [...CORE_COMPONENTS],
  providers: [...APP_SERVICES],
  exports: [...CORE_COMPONENTS, NgxCarouselModule]
})
export class CoreModule {}
