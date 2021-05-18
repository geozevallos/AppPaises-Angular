import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//No es q el RouterModule se importe 2 veces
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
