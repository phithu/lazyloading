import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { CommonModule } from '@angular/common';
import { UserComponent } from "app/user/user.component";
import { PreloadSelectedModulesList } from "app/lazy/preload-selected-modules-list";


const congfigRouter: Routes = [
    {
        path: '', redirectTo: 'user', pathMatch: 'full'
    },
    {
        path: 'user', component: UserComponent
    },
    {
        path: 'lazy',
        loadChildren: '../lazy/lazy.module#LazyModule',
        data: {
            preload: true
        }
    }
]


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(congfigRouter, {
            preloadingStrategy: PreloadSelectedModulesList
        })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        PreloadSelectedModulesList,
    ],
    declarations: []
})

export class AppRouterModule { }
