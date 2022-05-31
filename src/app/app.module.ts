import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { AnotherRandomNumberGeneratorService } from './services/example2.service';
import { Example2Component } from './components/example2/example2.component';
import { Dependencies2Service } from './services/dependencies2.service';
import { HttpClientModule } from '@angular/common/http';
import { EditReactFormComponent } from './components/edit-react-form/edit-react-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipes/pipe.pipe';
import { AlsoOtherModuleModule } from './also-other-module/also-other-module.module';
import { SharedModule } from './shared/shared/shared.module';
import { ModuleService } from './services/module.service';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example2Component,
    EditReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlsoOtherModuleModule,
    SharedModule
  ],
  providers: [
    Dependencies2Service,
    AnotherRandomNumberGeneratorService,
    //ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
