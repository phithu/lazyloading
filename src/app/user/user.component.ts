import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgProgressService } from 'ngx-progressbar';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

    constructor(private progressService: NgProgressService) { }

    ngOnInit() {
        this.progressService.start();
    }
    ngAfterViewInit() {
        this.progressService.done();
    }

}
