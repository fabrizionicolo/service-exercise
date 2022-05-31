import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnestedModuleComponent } from './innested-module.component';

const routes: Routes = [{ path: '', component: InnestedModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnestedModuleRoutingModule { }
