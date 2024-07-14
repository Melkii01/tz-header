import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-search-input-mobile',
  templateUrl: './search-input-mobile.component.html',
  styleUrls: ['./search-input-mobile.component.scss'],
  animations: [
    trigger('showSearchTrigger', [
      state('show', style({})),
      transition('void => show', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ]),
      transition('show => void', [
        animate(300, style({opacity: 0}))
      ]),
    ])
  ]
})
export class SearchInputMobileComponent {
  isShowSearchInput: boolean = false;

  showSearchInput(): void {
    if (!this.isShowSearchInput) {
      this.isShowSearchInput = true;
    }
  }

  hideSearchInput(): void {
    this.isShowSearchInput = false;
  }
}
