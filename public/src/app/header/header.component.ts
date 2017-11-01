import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    @Output() featureClicked = new EventEmitter<string>();

    onSelectStudent() {
        this.featureClicked.emit('student');
    }

    onSelectProfessor() {
        this.featureClicked.emit('professor');
    }
}