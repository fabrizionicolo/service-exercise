import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnestedModuleRoutingModule } from './innested-module-routing.module';
import { InnestedModuleComponent } from './innested-module.component';
import { ModuleService } from 'src/app/services/module.service';


@NgModule({
  declarations: [
    InnestedModuleComponent
  ],
  imports: [
    CommonModule,
    InnestedModuleRoutingModule
  ],
  providers: [
    //ModuleService
  ]
})
export class InnestedModuleModule { }
