import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRouterModule } from "app/router/app-router.module";
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        AppRouterModule,
        NgProgressModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
