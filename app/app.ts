import { Component } from '@angular/core';
import { Avatar } from './avatar';


@Component({
    directives: [Avatar],
    selector: 'my-app',
    templateUrl: './app.html'
})

export class App {
    public list = [];
    constructor() {
        this.list = [1, 2, 3, 4, 5, 6];
    }
}