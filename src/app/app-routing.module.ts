import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditReactFormComponent } from './components/edit-react-form/edit-react-form.component';
import { ExampleComponent } from './components/example/example.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [
  { path: "", component: ExampleComponent},
  { path: "edit/:id", component: EditReactFormComponent},
  { path: 'other', loadChildren: () => import('./other-module/other-module.module').then(m => m.OtherModuleModule),
    resolve: {
      value: ResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
