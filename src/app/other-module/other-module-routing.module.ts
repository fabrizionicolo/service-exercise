import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherModuleComponent } from './other-module.component';

const routes: Routes = [
  { path: '', component: OtherModuleComponent, children: [
    { path: 'innestother', loadChildren: () => import('./innested-module/innested-module.module').then(m => m.InnestedModuleModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherModuleRoutingModule { }
