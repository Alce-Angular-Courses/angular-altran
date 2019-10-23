import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';



@NgModule({
  declarations: [DestacarDirective],
  imports: [
    CommonModule
  ],
  exports: [DestacarDirective]
})
export class ShareModule { }
