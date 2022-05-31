import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlsoOtherModuleComponent } from './also-other-module.component';

const routes: Routes = [{ path: '', component: AlsoOtherModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlsoOtherModuleRoutingModule { }
