import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherModuleRoutingModule } from './other-module-routing.module';
import { OtherModuleComponent } from './other-module.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ModuleService } from '../services/module.service';


@NgModule({
  declarations: [
    OtherModuleComponent
  ],
  imports: [
    CommonModule,
    OtherModuleRoutingModule,
    SharedModule
  ],
  providers: [
    ModuleService
  ]
})
export class OtherModuleModule { }
