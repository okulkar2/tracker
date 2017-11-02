import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureClicked = new EventEmitter<string>();

    onSelectReceipe(){
        this.featureClicked.emit('receipe');
    }

    onSelectShopping(){
        this.featureClicked.emit('shopping');
    }
}