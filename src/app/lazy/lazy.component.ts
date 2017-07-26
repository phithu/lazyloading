import { NgProgressService } from 'ngx-progressbar';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.component.html',
    styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, AfterViewInit {

    constructor(private progressService: NgProgressService) {}


    ngOnInit() {
        this.progressService.start();

    }
    ngAfterViewInit() {
        this.progressService.done();

        
    }
}
