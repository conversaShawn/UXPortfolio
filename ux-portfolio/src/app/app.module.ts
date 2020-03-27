import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './universalComponents/navbar/navbar.component';
import { FooterComponent } from './universalComponents/footer/footer.component';
import { InfoComponent } from './universalComponents/info/info.component';
import { HomeDetailsComponent } from './homePageComponents/home-details/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
