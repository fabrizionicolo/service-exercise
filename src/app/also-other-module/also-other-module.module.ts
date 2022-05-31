import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlsoOtherModuleRoutingModule } from './also-other-module-routing.module';
import { AlsoOtherModuleComponent } from './also-other-module.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ModuleService } from '../services/module.service';


@NgModule({
  declarations: [
    AlsoOtherModuleComponent,
  ],
  imports: [
    AlsoOtherModuleRoutingModule,
    SharedModule
  ],
  providers: [
    ModuleService
  ],
  exports: [
    AlsoOtherModuleComponent
  ]
})
export class AlsoOtherModuleModule { }
