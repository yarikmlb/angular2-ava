import { Component } from '@angular/core';


@Component({
    selector: 'avatar',
    templateUrl: './avatar.html'
})

export class Avatar {
    public backgroundColor: string;
    public textColor: string;

    constructor(){
        this.backgroundColor = this.getRandomBackground();
        this.textColor = this.getRandomColor();
    }
    getRandomBackground(){
        var color = '#';
        var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
        color += letters[Math.floor(Math.random() * letters.length)];
        return color;
    }
    getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}