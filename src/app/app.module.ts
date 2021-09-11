import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routing.module';
import { NavIncludeComponent } from './includes/nav/nav.component';
import { HeaderIncludeComponent } from './includes/header/header.component';
import { FooterIncludeComponent } from './includes/footer/footer.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    NavIncludeComponent,
    HeaderIncludeComponent,
    FooterIncludeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
