import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `<p>Redirecting.</p>`
})
export class RouterComponent implements OnInit {
    constructor (private router: Router) {}

    ngOnInit () {
        this.router.navigate(['/', 'sign-in']);
    }
}