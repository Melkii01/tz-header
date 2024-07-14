import {Component, ElementRef, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  animations: [
    trigger('showSearchTrigger', [
      state('show', style({})),
      transition('void => show', [
        style({transform: 'rotateY(90deg)'}),
        animate(300, style({transform: 'rotateY(0deg)'}))
      ]),
      transition('show => void', [
        animate(300, style({transform: 'rotateY(90deg)'}))
      ]),
    ])
  ]
})
export class SearchInputComponent {
  isShowSearchInput: boolean = false;
  isShowSearchInputParams: boolean = false;

  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isShowSearchInput = false;
      this.isShowSearchInputParams = false;
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  showSearchInput(): void {
    this.isShowSearchInput = true;
  }

  showSearchParams() {
    this.isShowSearchInputParams = true;
  }
}
