import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileWindowWidth: boolean = false;
  ngOnInit(): void {
    this.isMobileWindowWidth = window.innerWidth < 1040;
  }
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number): void {

    if (width < 1040) {
      this.isMobileWindowWidth = true;
    } else {
      this.isMobileWindowWidth = false;
    }
  }
}
