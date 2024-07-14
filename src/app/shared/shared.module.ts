import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {HeaderComponent} from "./layout/header/header.component";
import {SearchInputComponent} from "./components/search-input/search-input.component";
import {RouterModule} from "@angular/router";
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {BurgerMenuComponent} from './components/burger-menu/burger-menu.component';
import {NotificationComponent} from './components/notification/notification.component';
import {SearchInputMobileComponent} from './components/search-input-mobile/search-input-mobile.component';
import {AddItemsComponent} from './components/add-items/add-items.component';
import {HistoryComponent} from './components/history/history.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SearchInputComponent,
    NavMenuComponent,
    BurgerMenuComponent,
    NotificationComponent,
    SearchInputMobileComponent,
    AddItemsComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SearchInputComponent,
    NavMenuComponent,
    BurgerMenuComponent,
    NotificationComponent,
    SearchInputMobileComponent,
    AddItemsComponent,
    HistoryComponent
  ]
})
export class SharedModule {
}
