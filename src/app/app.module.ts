import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderComponent } from './header/header.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // MatSliderModule,
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
