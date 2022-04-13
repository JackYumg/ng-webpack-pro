import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

const ANT_MODULES = [
    NzButtonModule
]

@NgModule({
    imports: [BrowserModule , AppRouteingModule , ...ANT_MODULES],
    declarations: [AppComponent , HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }