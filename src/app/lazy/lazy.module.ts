import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyRouterModule } from "app/lazy/lazy-router/lazy-router.module";

@NgModule({
    imports: [
        CommonModule,
        LazyRouterModule
    ],
    declarations: [LazyComponent]
})
export class LazyModule { }

