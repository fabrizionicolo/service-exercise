import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from 'src/app/pipes/pipe.pipe';
import { ModuleService } from 'src/app/services/module.service';

@NgModule({
  declarations: [
    PipePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    //ModuleService
  ],
  exports: [
    CommonModule, PipePipe
  ]
})
export class SharedModule { }
