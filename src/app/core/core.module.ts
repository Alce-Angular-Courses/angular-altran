import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, CounterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, CounterComponent]
})
export class CoreModule { }
