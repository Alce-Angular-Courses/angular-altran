import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { MenuComponent } from './menu/menu.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusModule } from './tareas-plus/tareas-plus.module';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [TareasComponent, MenuComponent, TareasSimpleComponent, InstruccionesComponent],
  imports: [
    CommonModule,
    ShareModule,
    TareasRoutingModule,
    TareasPlusModule
  ]
})
export class TareasModule { }
