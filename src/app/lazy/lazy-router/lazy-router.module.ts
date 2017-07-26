import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from "../lazy.component";

const configRoutes: Routes = [
    {
        path: '',
        component: LazyComponent,
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(configRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class LazyRouterModule { }
