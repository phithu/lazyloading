import { NgProgressService } from 'ngx-progressbar';
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs'

export class PreloadSelectedModulesList implements PreloadingStrategy {


    preload(route: Route, load: Function): Observable<any> {

        if (!route.data.preload) {
            return Observable.of(null);
        }
        return Observable.of(true).delay(5000).switchMap(value => load())
    }
}
