import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { TruncarPipe } from './truncar.pipe';



@NgModule({
  declarations: [DestacarDirective, TruncarPipe],
  imports: [
    CommonModule
  ],
  exports: [DestacarDirective, TruncarPipe]
})
export class ShareModule { }
