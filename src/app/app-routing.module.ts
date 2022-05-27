import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditReactFormComponent } from './components/edit-react-form/edit-react-form.component';
import { ExampleComponent } from './components/example/example.component';

const routes: Routes = [
  { path: "", component: ExampleComponent},
  { path: "edit/:id", component: EditReactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
