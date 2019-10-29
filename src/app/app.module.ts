import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ShareModule } from './share/share.module';
import { StoreModule } from '@ngrx/store';
import { reducers} from './reducers';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    ShareModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
