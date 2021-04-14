import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './shared/components/components.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContatoFormComponent } from './shared/components/contato-form/contato-form.component';

import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    ContatoFormComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
